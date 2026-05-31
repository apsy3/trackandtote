const header = document.querySelector(".site-header");
const canvas = document.querySelector("#heroPlot");
const ctx = canvas ? canvas.getContext("2d") : null;
const evidenceExplorer = document.querySelector("[data-evidence-explorer]");

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

function buildEvidenceLayers(marketLayer) {
  return [
    {
      name: "Rainfall",
      unit: "district-month",
      state: "pending",
      badge: "source needed",
      reading: "Need actual rainfall, normal rainfall, departure %, dry-spell days, and heavy-rain flags before this layer can explain stress."
    },
    {
      name: "Groundwater",
      unit: "seasonal buffer",
      state: "seasonal",
      badge: "coarser time",
      reading: "Likely pre/post-monsoon rather than daily. It can describe water cushion, but must be joined carefully to month and district."
    },
    {
      name: "Crop output",
      unit: "district-season",
      state: "pending",
      badge: "source needed",
      reading: "Need onion area, production, yield, and season. Monthly market movement should be interpreted against the crop calendar."
    },
    {
      name: "Arrivals",
      unit: "mandi-month",
      state: "missing",
      badge: "not in sample",
      reading: "The first mandi endpoint returned prices, but not arrivals. Without arrivals, price movement cannot be read as supply movement."
    },
    marketLayer
  ];
}

function buildPendingFrame(label, status, title) {
  return {
    label,
    status,
    title,
    coverage: 0,
    coverageLabel: "0 of 5 evidence layers joined",
    layers: buildEvidenceLayers({
      name: "Mandi price",
      unit: "market-day to month",
      state: "pending",
      badge: "pull needed",
      reading: "Need historical min, max, modal price rows for selected mandis, then monthly aggregation and outlier checks."
    }),
    lags: [
      { label: "Same month", fill: 6, note: "No joined layers yet for this frame." },
      { label: "1 month", fill: 6, note: "Waiting for rainfall and market history." },
      { label: "3 months", fill: 6, note: "Waiting for crop-stage alignment." },
      { label: "6 months", fill: 6, note: "Waiting for season and storage context." }
    ],
    readingTitle: "What this frame can say",
    readingCopy: "Nothing interpretive yet. This is a time slot where source rows must be fetched, normalized, and checked before the article says anything about outcome."
  };
}

const evidenceFrames = [
  buildPendingFrame("Jun 2021", "Baseline to fetch", "Jun 2021: baseline frame"),
  buildPendingFrame("Jun 2022", "Historical pull needed", "Jun 2022: comparison frame"),
  buildPendingFrame("Jun 2023", "Historical pull needed", "Jun 2023: stress-test frame"),
  buildPendingFrame("Jun 2024", "Historical pull needed", "Jun 2024: seasonality frame"),
  buildPendingFrame("Jun 2025", "Historical pull needed", "Jun 2025: recent comparison frame"),
  {
    label: "May 2026",
    status: "Partial evidence",
    title: "May 2026: one verified market signal",
    coverage: 20,
    coverageLabel: "1 of 5 evidence layers joined",
    layers: buildEvidenceLayers({
      name: "Mandi price",
      unit: "8 exact onion rows",
      state: "verified",
      badge: "verified",
      reading: "31 May 2026 Maharashtra onion rows show modal prices from Rs 800 to Rs 1,250 per quintal. This is a market signal, not a causal explanation."
    }),
    lags: [
      { label: "Same month", fill: 22, note: "Market price sample exists, but drivers are not joined." },
      { label: "1 month", fill: 8, note: "Needs rainfall history before testing." },
      { label: "3 months", fill: 8, note: "Needs crop-stage and arrivals history." },
      { label: "6 months", fill: 8, note: "Needs groundwater, storage, and season controls." }
    ],
    readingTitle: "What this frame can say",
    readingCopy: "We can say the selected market sample has a visible price spread. We cannot yet say rainfall, groundwater, or crop output explains it."
  }
];

function setExplorerText(selector, text) {
  const element = evidenceExplorer.querySelector(selector);
  if (element) {
    element.textContent = text;
  }
}

function renderEvidenceFrame(index) {
  if (!evidenceExplorer) {
    return;
  }

  const frame = evidenceFrames[index] || evidenceFrames[evidenceFrames.length - 1];
  const coverageMeter = evidenceExplorer.querySelector("[data-coverage-meter]");
  const layerStack = evidenceExplorer.querySelector("[data-layer-stack]");
  const lagBars = evidenceExplorer.querySelector("[data-lag-bars]");

  setExplorerText("[data-frame-label]", frame.label);
  setExplorerText("[data-frame-status]", frame.status);
  setExplorerText("[data-frame-title]", frame.title);
  setExplorerText("[data-coverage-label]", frame.coverageLabel);
  setExplorerText("[data-reading-title]", frame.readingTitle);
  setExplorerText("[data-reading-copy]", frame.readingCopy);

  if (coverageMeter) {
    coverageMeter.style.setProperty("--coverage", `${frame.coverage}%`);
  }

  if (layerStack) {
    layerStack.replaceChildren();
    frame.layers.forEach((layer) => {
      const row = document.createElement("div");
      row.className = `layer-row is-${layer.state}`;

      const identity = document.createElement("div");
      const title = document.createElement("strong");
      const unit = document.createElement("span");
      title.textContent = layer.name;
      unit.textContent = layer.unit;
      identity.append(title, unit);

      const badge = document.createElement("span");
      badge.className = "layer-state";
      badge.textContent = layer.badge;

      const reading = document.createElement("p");
      reading.textContent = layer.reading;

      row.append(identity, badge, reading);
      layerStack.append(row);
    });
  }

  if (lagBars) {
    lagBars.replaceChildren();
    frame.lags.forEach((lag) => {
      const row = document.createElement("div");
      row.className = "lag-bar";
      row.style.setProperty("--lag-fill", `${lag.fill}%`);

      const label = document.createElement("span");
      const bar = document.createElement("i");
      const note = document.createElement("small");
      label.textContent = lag.label;
      note.textContent = lag.note;

      row.append(label, bar, note);
      lagBars.append(row);
    });
  }
}

function initEvidenceExplorer() {
  if (!evidenceExplorer) {
    return;
  }

  const slider = evidenceExplorer.querySelector("[data-time-slider]");
  if (!slider) {
    return;
  }

  slider.max = evidenceFrames.length - 1;
  slider.value = evidenceFrames.length - 1;
  renderEvidenceFrame(Number(slider.value));
  slider.addEventListener("input", () => renderEvidenceFrame(Number(slider.value)));
}

syncHeader();
initEvidenceExplorer();
if (canvas) {
  resizeCanvas();
  drawHeroPlot();
}

window.addEventListener("scroll", syncHeader, { passive: true });
window.addEventListener("resize", resizeCanvas);
