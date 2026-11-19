// Copy email
const EMAIL = "Mohamedhagras14@gmail.com";
function copyEmail(btn) {
  const done = () => { const t = btn.textContent; btn.textContent = "Copied"; setTimeout(() => btn.textContent = t, 1600); };
  const fallback = () => {
    const r = document.createRange(); r.selectNodeContents(document.getElementById("mail"));
    const s = getSelection(); s.removeAllRanges(); s.addRange(r);
    btn.textContent = "Selected, press Ctrl+C";
    setTimeout(() => btn.textContent = "Copy email", 2200);
  };
  try { navigator.clipboard.writeText(EMAIL).then(done, fallback); } catch (e) { fallback(); }
}
document.getElementById("copy2").addEventListener("click", e => copyEmail(e.currentTarget));

// Request log: one line per page section, each links to it
(() => {
  const log = document.getElementById("log");
  const routes = [
    ["GET", "/open-source", 200, "#open-source"],
    ["GET", "/projects", 200, "#projects"],
    ["GET", "/experience", 200, "#experience"],
    ["GET", "/skills", 200, "#stack"],
    ["GET", "/about", 200, "#about"],
    ["POST", "/contact", 201, "#contact"],
  ];
  let i = 0;
  function add() {
    const [m, path, code, href] = routes[i++ % routes.length];
    const a = document.createElement("a");
    a.href = href;
    a.innerHTML = `<span class="m">${m}</span><span class="p">${path}</span><span class="c">${code}</span><span class="t">${6 + Math.floor(Math.random() * 22)}ms</span>`;
    log.append(a);
    while (log.children.length > 4) log.firstElementChild.remove();
  }
  for (let k = 0; k < 4; k++) add();
  if (!matchMedia("(prefers-reduced-motion: reduce)").matches) setInterval(add, 1800);
})();
