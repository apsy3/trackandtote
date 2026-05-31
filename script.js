const header = document.querySelector(".site-header");
const canvas = document.querySelector("#heroPlot");
const ctx = canvas ? canvas.getContext("2d") : null;

function syncHeader() {
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

syncHeader();
if (canvas) {
  resizeCanvas();
  drawHeroPlot();
}

window.addEventListener("scroll", syncHeader, { passive: true });
window.addEventListener("resize", resizeCanvas);
