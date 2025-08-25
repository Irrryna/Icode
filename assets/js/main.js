(function(){
  const root = document.body;
  const key = "theme-pref";
  const toggleBtn = document.getElementById("themeToggle");
  const saved = localStorage.getItem(key);
  if(saved){ root.setAttribute("data-bs-theme", saved); }
  function toggle(){
    const next = root.getAttribute("data-bs-theme")==="dark" ? "light" : "dark";
    root.setAttribute("data-bs-theme", next);
    localStorage.setItem(key, next);
  }
  toggleBtn && toggleBtn.addEventListener("click", toggle);
})();

(function(){
  const el = document.getElementById("roleRotator");
  if(!el) return;
  const roles = ["Développeuse", "Test QA", "Linguiste", "Enseignante", "Geek 🧪"];
  let i = 0;
  setInterval(() => {
    i = (i + 1) % roles.length;
    el.textContent = roles[i];
  }, 2200);
})();

(function(){
  const btn = document.getElementById("dontClick");
  const modalEl = document.getElementById("easterEggModal");
  if(!btn || !modalEl) return;
  const modal = new bootstrap.Modal(modalEl);
  btn.addEventListener("click", () => modal.show());
})();

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("cvLink").setAttribute("href", "#");
document.getElementById("linkedinLink").setAttribute("href", "#");
document.getElementById("footerLinkedIn").setAttribute("href", "#");
