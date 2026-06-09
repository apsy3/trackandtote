import { copyFile, mkdir, readdir, readFile, rm, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const distDir = path.join(repoRoot, "apps", "observatory", "dist");
const contentDir = path.join(repoRoot, "apps", "observatory", "src", "content", "blog");

const args = new Set(process.argv.slice(2));
const dryRun = args.has("--dry-run");

const generatedRootPaths = [
  "_astro",
  "api",
  "blog",
  "notes",
  "projects",
  "method",
  "index.html",
  // Historical root artifacts from older IA; remove if they reappear.
  "about",
  "posts",
  "rss.xml",
];

const protectedRootPaths = new Set([
  ".git",
  ".github",
  "apps",
  "data-cache",
  "docs",
  "node_modules",
  "packages",
  "scripts",
  "src",
  "README.md",
  "AGENTS.md",
  "package.json",
  "package-lock.json",
  "tsconfig.json",
  "astro.config.mjs",
]);

async function exists(target) {
  try {
    await stat(target);
    return true;
  } catch (error) {
    if (error && error.code === "ENOENT") return false;
    throw error;
  }
}

function assertSafeGeneratedPath(relativePath) {
  if (path.isAbsolute(relativePath) || relativePath.includes("..")) {
    throw new Error(`Refusing unsafe generated path: ${relativePath}`);
  }

  if (protectedRootPaths.has(relativePath)) {
    throw new Error(`Refusing to touch protected root path: ${relativePath}`);
  }

  const target = path.resolve(repoRoot, relativePath);
  if (!target.startsWith(`${repoRoot}${path.sep}`) && target !== repoRoot) {
    throw new Error(`Refusing path outside repository root: ${relativePath}`);
  }
}

async function walkFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walkFiles(fullPath)));
    } else if (entry.isFile()) {
      files.push(fullPath);
    }
  }

  return files;
}

function readFrontmatterValue(text, key) {
  const match = text.match(new RegExp(`^${key}:\\s*['"]?([^'"\\n]+)['"]?\\s*$`, "m"));
  return match ? match[1].trim() : null;
}

async function draftSlugs() {
  if (!(await exists(contentDir))) return [];

  const files = await walkFiles(contentDir);
  const slugs = [];

  for (const file of files) {
    if (!file.endsWith(".mdx") && !file.endsWith(".md")) continue;
    const text = await readFile(file, "utf8");
    const isDraft = /^draft:\s*true\s*$/m.test(text);
    if (!isDraft) continue;

    const explicitSlug = readFrontmatterValue(text, "slug");
    const fallbackSlug = path.basename(file, path.extname(file));
    slugs.push(explicitSlug || fallbackSlug);
  }

  return slugs;
}

async function assertNoDraftRoutes() {
  const slugs = await draftSlugs();
  if (slugs.length === 0) return;

  const generatedFiles = await walkFiles(distDir);
  const generatedRelativeFiles = generatedFiles.map((file) =>
    path.relative(distDir, file).split(path.sep).join("/"),
  );

  for (const slug of slugs) {
    const leaked = generatedRelativeFiles.filter((file) => file.includes(slug));
    if (leaked.length > 0) {
      throw new Error(
        `Refusing to sync: draft slug "${slug}" appears in build output: ${leaked.join(", ")}`,
      );
    }
  }
}

async function copyDirectory(sourceDir, targetDir) {
  const entries = await readdir(sourceDir, { withFileTypes: true });

  if (!dryRun) {
    await mkdir(targetDir, { recursive: true });
  }

  for (const entry of entries) {
    const source = path.join(sourceDir, entry.name);
    const target = path.join(targetDir, entry.name);

    if (entry.isDirectory()) {
      await copyDirectory(source, target);
    } else if (entry.isFile()) {
      const relativeTarget = path.relative(repoRoot, target);
      console.log(`${dryRun ? "Would copy" : "Copy"} ${relativeTarget}`);
      if (!dryRun) {
        await mkdir(path.dirname(target), { recursive: true });
        await copyFile(source, target);
      }
    }
  }
}

async function main() {
  if (!(await exists(distDir))) {
    throw new Error("Build output not found. Run `npm run build` first.");
  }

  await assertNoDraftRoutes();

  for (const relativePath of generatedRootPaths) {
    assertSafeGeneratedPath(relativePath);
    const target = path.join(repoRoot, relativePath);
    if (await exists(target)) {
      console.log(`${dryRun ? "Would remove" : "Remove"} ${relativePath}`);
      if (!dryRun) {
        await rm(target, { recursive: true, force: true });
      }
    }
  }

  await copyDirectory(distDir, repoRoot);
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
