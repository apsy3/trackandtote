const header = document.querySelector(".site-header");
const canvas = document.querySelector("#heroPlot");
const ctx = canvas ? canvas.getContext("2d") : null;
const inventoryApp = document.querySelector("[data-inventory-app]");

function syncHeader() {
  if (!header) {
    return;
  }

  header.classList.toggle("is-scrolled", window.scrollY > 24);
}

function resizeCanvas() {
  if (!canvas || !ctx) {
    return;
  }

  const rect = canvas.getBoundingClientRect();
  const scale = window.devicePixelRatio || 1;
  canvas.width = Math.round(rect.width * scale);
  canvas.height = Math.round(rect.height * scale);
  ctx.setTransform(scale, 0, 0, scale, 0, 0);
}

function drawHeroPlot(time = 0) {
  if (!canvas || !ctx) {
    return;
  }

  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const pad = Math.max(28, width * 0.06);
  const chartW = width - pad * 2;
  const chartH = height - pad * 2;

  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#fffdf8";
  ctx.fillRect(0, 0, width, height);

  ctx.strokeStyle = "rgba(23, 32, 29, 0.08)";
  ctx.lineWidth = 1;
  for (let i = 0; i <= 5; i += 1) {
    const y = pad + (chartH / 5) * i;
    ctx.beginPath();
    ctx.moveTo(pad, y);
    ctx.lineTo(width - pad, y);
    ctx.stroke();
  }

  const series = [
    { color: "#0f6b57", phase: 0, weight: 2.6 },
    { color: "#3266a8", phase: 1.4, weight: 2.2 },
    { color: "#d85b45", phase: 2.8, weight: 2.2 }
  ];

  series.forEach((line) => {
    ctx.beginPath();
    ctx.strokeStyle = line.color;
    ctx.lineWidth = line.weight;
    for (let i = 0; i <= 120; i += 1) {
      const progress = i / 120;
      const x = pad + chartW * progress;
      const wave = Math.sin(progress * 7 + line.phase + time * 0.0012) * 0.16;
      const trend = Math.cos(progress * 3.4 + line.phase) * 0.08;
      const y = pad + chartH * (0.48 + wave + trend);
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.stroke();
  });

  for (let i = 0; i < 18; i += 1) {
    const progress = i / 17;
    const x = pad + chartW * progress;
    const barHeight = chartH * (0.18 + ((Math.sin(i * 1.7 + time * 0.001) + 1) / 2) * 0.42);
    ctx.fillStyle = i % 3 === 0 ? "rgba(216, 91, 69, 0.26)" : "rgba(15, 107, 87, 0.18)";
    ctx.fillRect(x - 5, height - pad - barHeight, 10, barHeight);
  }

  const dots = [
    [0.15, 0.62, "#d85b45"],
    [0.42, 0.38, "#0f6b57"],
    [0.66, 0.54, "#3266a8"],
    [0.84, 0.28, "#d85b45"]
  ];

  dots.forEach(([dx, dy, color], index) => {
    const radius = 7 + Math.sin(time * 0.002 + index) * 1.5;
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(pad + chartW * dx, pad + chartH * dy, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.strokeStyle = "rgba(23, 32, 29, 0.1)";
    ctx.arc(pad + chartW * dx, pad + chartH * dy, radius + 10, 0, Math.PI * 2);
    ctx.stroke();
  });

  ctx.fillStyle = "rgba(23, 32, 29, 0.58)";
  ctx.font = "700 13px Inter, system-ui, sans-serif";
  ctx.fillText("source overlap", pad, pad - 8);

  requestAnimationFrame(drawHeroPlot);
}

function createOption(value) {
  const option = document.createElement("option");
  option.value = value;
  option.textContent = value;
  return option;
}

function textOrFallback(value, fallback = "Not listed") {
  return value && value.trim() ? value.trim() : fallback;
}

function startsWithBucket(bucket, code) {
  return bucket.trim().startsWith(code);
}

function normalizeSearch(value) {
  return value.trim().toLowerCase();
}

function createRow(field, value) {
  const row = document.createElement("div");
  const label = document.createElement("dt");
  const content = document.createElement("dd");
  label.textContent = field;
  content.textContent = textOrFallback(value);
  row.append(label, content);
  return row;
}

function renderInventoryCard(item) {
  const card = document.createElement("article");
  card.className = "inventory-card";

  const bucketCode = item.bucket ? item.bucket.slice(0, 1).toLowerCase() : "u";
  card.classList.add(`bucket-${bucketCode}`);

  const top = document.createElement("div");
  top.className = "inventory-card-top";

  const id = document.createElement("span");
  id.className = "inventory-id";
  id.textContent = `ID ${textOrFallback(item.id, "?")}`;

  const badges = document.createElement("div");
  badges.className = "inventory-badges";

  const bucket = document.createElement("span");
  bucket.className = "inventory-badge";
  bucket.textContent = textOrFallback(item.bucket);

  const risk = document.createElement("span");
  risk.className = "inventory-badge risk";
  risk.textContent = textOrFallback(item.risk);

  badges.append(bucket, risk);
  top.append(id, badges);

  const title = document.createElement("h3");
  title.textContent = textOrFallback(item.metric);

  const taxonomy = document.createElement("p");
  taxonomy.className = "inventory-taxonomy";
  taxonomy.textContent = `${textOrFallback(item.category)} | ${textOrFallback(item.subcategory)}`;

  const recommendation = document.createElement("p");
  recommendation.className = "inventory-recommendation";
  recommendation.textContent = textOrFallback(item.recommendation);

  const chips = document.createElement("div");
  chips.className = "inventory-chips";
  [
    `Coverage: ${textOrFallback(item.coverage)}`,
    `Granularity: ${textOrFallback(item.granularity)}`,
    `Cadence: ${textOrFallback(item.cadence)}`,
    `Formats: ${textOrFallback(item.formats)}`
  ].forEach((label) => {
    const chip = document.createElement("span");
    chip.textContent = label;
    chips.append(chip);
  });

  const details = document.createElement("details");
  details.className = "inventory-details";

  const summary = document.createElement("summary");
  summary.textContent = "Checks, licence, and quality notes";

  const grid = document.createElement("dl");
  grid.append(
    createRow("Agencies", item.agencies),
    createRow("Republish raw data?", item.republish_raw),
    createRow("Attribution need", item.attribution_need),
    createRow("Required checks", item.required_checks),
    createRow("Suitable website uses", item.suitable_uses),
    createRow("License / public-use notes", item.license_notes),
    createRow("Commercial / AI-use caution", item.commercial_caution),
    createRow("Critical quality notes", item.quality_notes)
  );
  details.append(summary, grid);

  const footer = document.createElement("footer");
  footer.className = "inventory-card-footer";

  const source = document.createElement("span");
  source.textContent = textOrFallback(item.agencies);

  const link = document.createElement("a");
  link.href = item.url || "#";
  link.target = "_blank";
  link.rel = "noreferrer";
  link.textContent = item.url ? "Open source" : "No source URL";
  if (!item.url) {
    link.classList.add("disabled");
    link.setAttribute("aria-disabled", "true");
    link.tabIndex = -1;
  }

  footer.append(source, link);
  card.append(top, title, taxonomy, recommendation, chips, details, footer);
  return card;
}

function initInventory() {
  if (!inventoryApp) {
    return;
  }

  const sourcePath = inventoryApp.dataset.inventorySrc;
  const resultsList = inventoryApp.querySelector("[data-results-list]");
  const summary = inventoryApp.querySelector("[data-results-summary]");
  const generated = inventoryApp.querySelector("[data-generated-on]");
  const emptyState = inventoryApp.querySelector("[data-empty-state]");
  const searchInput = inventoryApp.querySelector("[data-filter-search]");
  const bucketSelect = inventoryApp.querySelector("[data-filter-bucket]");
  const categorySelect = inventoryApp.querySelector("[data-filter-category]");
  const riskSelect = inventoryApp.querySelector("[data-filter-risk]");
  const totalCount = inventoryApp.querySelector("[data-total-count]");
  const openCount = inventoryApp.querySelector("[data-open-count]");
  const checkCount = inventoryApp.querySelector("[data-check-count]");
  const restrictedCount = inventoryApp.querySelector("[data-restricted-count]");

  if (!sourcePath || !resultsList || !summary) {
    return;
  }

  const sortableCompare = (a, b) => a.localeCompare(b, "en", { sensitivity: "base" });

  fetch(sourcePath)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to load inventory (${response.status})`);
      }
      return response.json();
    })
    .then((payload) => {
      const items = Array.isArray(payload.items) ? payload.items : [];
      const buckets = [...new Set(items.map((item) => item.bucket).filter(Boolean))].sort(sortableCompare);
      const categories = [...new Set(items.map((item) => item.category).filter(Boolean))].sort(sortableCompare);
      const risks = [...new Set(items.map((item) => item.risk).filter(Boolean))].sort(sortableCompare);

      buckets.forEach((bucket) => bucketSelect && bucketSelect.append(createOption(bucket)));
      categories.forEach((category) => categorySelect && categorySelect.append(createOption(category)));
      risks.forEach((risk) => riskSelect && riskSelect.append(createOption(risk)));

      if (totalCount) {
        totalCount.textContent = String(items.length);
      }
      if (openCount) {
        openCount.textContent = String(items.filter((item) => startsWithBucket(item.bucket || "", "A")).length);
      }
      if (checkCount) {
        checkCount.textContent = String(items.filter((item) => startsWithBucket(item.bucket || "", "B")).length);
      }
      if (restrictedCount) {
        restrictedCount.textContent = String(items.filter((item) => startsWithBucket(item.bucket || "", "D")).length);
      }
      if (generated) {
        generated.textContent = `Generated from workbook: ${textOrFallback(payload.source_workbook)} | Snapshot date: ${textOrFallback(payload.generated_on)}`;
      }

      const searchFields = [
        "id",
        "bucket",
        "risk",
        "category",
        "subcategory",
        "metric",
        "agencies",
        "coverage",
        "granularity",
        "formats",
        "cadence",
        "recommendation",
        "required_checks",
        "suitable_uses",
        "quality_notes",
        "license_notes"
      ];

      function render() {
        const query = normalizeSearch(searchInput ? searchInput.value : "");
        const selectedBucket = bucketSelect ? bucketSelect.value : "";
        const selectedCategory = categorySelect ? categorySelect.value : "";
        const selectedRisk = riskSelect ? riskSelect.value : "";

        const filtered = items.filter((item) => {
          if (selectedBucket && item.bucket !== selectedBucket) {
            return false;
          }
          if (selectedCategory && item.category !== selectedCategory) {
            return false;
          }
          if (selectedRisk && item.risk !== selectedRisk) {
            return false;
          }
          if (!query) {
            return true;
          }
          const corpus = searchFields.map((field) => (item[field] || "").toLowerCase()).join(" ");
          return corpus.includes(query);
        });

        resultsList.replaceChildren();
        filtered.forEach((item) => resultsList.append(renderInventoryCard(item)));

        const filters = [selectedBucket, selectedCategory, selectedRisk].filter(Boolean);
        const filterText = filters.length ? ` with ${filters.join(" | ")}` : "";
        summary.textContent = `${filtered.length} of ${items.length} rows shown${filterText}`;
        if (emptyState) {
          emptyState.hidden = filtered.length > 0;
        }
      }

      [searchInput, bucketSelect, categorySelect, riskSelect].forEach((element) => {
        if (element) {
          element.addEventListener("input", render);
          element.addEventListener("change", render);
        }
      });

      render();
    })
    .catch((error) => {
      summary.textContent = `Inventory load issue: ${error.message}`;
      if (emptyState) {
        emptyState.hidden = false;
      }
    });
}

syncHeader();
initInventory();
if (canvas) {
  resizeCanvas();
  drawHeroPlot();
}

window.addEventListener("scroll", syncHeader, { passive: true });
window.addEventListener("resize", resizeCanvas);
