function applyViewport() {
  let viewportMeta = document.querySelector('meta[name="viewport"]');
  if (!viewportMeta) {
      viewportMeta = document.createElement('meta');
      viewportMeta.name = "viewport";
      document.head.appendChild(viewportMeta);
  }
  if (window.innerWidth < 768) {
      viewportMeta.content = "width=device-width, initial-scale=1";
  } else {
      viewportMeta.content = "width=1920";
  }
}

window.addEventListener('resize', applyViewport);
window.addEventListener('load', applyViewport);