// Theme toggle with persistence
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

// Easter egg modal
(function(){
  const btn = document.getElementById("dontClick");
  const modalEl = document.getElementById("easterEggModal");
  if(!btn || !modalEl) return;
  const modal = new bootstrap.Modal(modalEl);
  btn.addEventListener("click", () => modal.show());
})();

// Current year
document.getElementById("year").textContent = new Date().getFullYear();

// TODO: set your actual LinkedIn links (kept safe if element absent)
(function(){var el=document.getElementById("linkedinLink"); if(el){el.setAttribute("href","#");}})();
(function(){var el=document.getElementById("footerLinkedIn"); if(el){el.setAttribute("href","#");}})();
