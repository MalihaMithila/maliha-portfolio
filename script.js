/* =====================================================================
   EDIT THIS SECTION — everything you need to update lives here
   ===================================================================== */

// Social links. Leave "" to hide GitHub/LinkedIn. Facebook falls back to the placeholder.
const SOCIAL = {

facebook: "https://www.facebook.com/maliha.rahman.mithila",
  github: "",                            // TODO: e.g. "https://github.com/your-username"
  linkedin: ""                           // TODO: e.g. "https://www.linkedin.com/in/your-name"
};

// Projects. A project is shown only when `ready: true`.
// Fill in details, then set ready: true. Leave github/demo as "" to hide those buttons.
const PROJECTS = [
  {
    
ready: true,
name: "Anha Construction Management System",
description: "A web-based system for managing construction projects, employees, clients, and financial records.",
tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
image: "anha-dashboard.png",
github: "",
demo: ""
  },
  
{
  ready: true,
  name: "GoFar Travel Management System",
  description: "A travel management for organizing bookings, customers, destinations, travel packages, and financial information.",
  tech: ["HTML", "CSS", "JavaScript", "MySQL"],
  image: "gofar-dashboard.png",
  github: "",
  demo: ""
},

  
{
  ready: true,
  name: "Data Science & Data Cleaning",
  description: "A data preprocessing assignment focused on handling missing values using Mean and Mode imputation and detecting outliers using the IQR method.",
  tech: ["Python", "Pandas", "Google Colab"],
  image: "data-science.png",
  github: "",
  demo: ""
}

];

/* =====================================================================
   SCRIPT (no need to edit below)
   ===================================================================== */

// Mobile nav
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
});
navLinks.querySelectorAll("a").forEach(a =>
  a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  })
);

// Profile photo fallback (shows initials if profile.jpg is missing)
const img = document.getElementById("profileImg");
const frame = img.closest(".photo-frame");
const checkPhoto = () => { if (!img.complete || img.naturalWidth === 0) frame.classList.add("no-photo"); };
img.addEventListener("error", () => frame.classList.add("no-photo"));
if (img.complete) checkPhoto();

// Social links
document.getElementById("facebookLink").href = SOCIAL.facebook;

const extra = document.getElementById("extraSocials");
const icons = {
  github: '<svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true"><path d="M12 .5a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.400-5.300 5.700.4.4.8 1.100.8 2.200v3.200c0 .3.2.7.8.6A11.500 11.500 0 0 0 12 .5z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3V9.5zm7 0h3.8v1.6h.1c.5-1 1.8-2 3.800-2 4 0 4.800 2.600 4.800 6V21h-4v-5.200c0-1.300 0-2.900-1.800-2.900s-2 1.400-2 2.800V21h-4V9.500z"/></svg>'
};
const labels = { github: "GitHub", linkedin: "LinkedIn" };

["github", "linkedin"].forEach(key => {
  const url = (SOCIAL[key] || "").trim();
  if (!url) return;
  const item = document.createElement("div");
  item.className = "contact-item";
  item.innerHTML = `${icons[key]}<div><span class="contact-label">${labels[key]}</span>
    <a class="contact-value" target="_blank" rel="noopener noreferrer"
       aria-label="Maliha's ${labels[key]} profile (opens in a new tab)" href="${url}">${labels[key]} Profile</a></div>`;
  extra.appendChild(item);
});

// Projects
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const grid = document.getElementById("projectsGrid");

PROJECTS.filter(p => p.ready).forEach(p => {
  const card = document.createElement("article");
  card.className = "project-card";

  const thumb = p.image
    ? `<div class="project-thumb"><img src="${esc(p.image)}" alt="Screenshot of ${esc(p.name)}" loading="lazy" /></div>`
    : `<div class="project-thumb" aria-hidden="true">Screenshot coming soon</div>`;

  const desc = p.description
    ? `<p class="project-desc">${esc(p.description)}</p>`
    : `<p class="project-desc pending">Project details coming soon.</p>`;

  const tags = p.tech && p.tech.length
    ? `<ul class="tags tags-dark">${p.tech.map(t => `<li>${esc(t)}</li>`).join("")}</ul>`
    : "";

  const actions = [];
  if (p.github) actions.push(`<a class="btn btn-primary" href="${esc(p.github)}" target="_blank" rel="noopener noreferrer" aria-label="${esc(p.name)} on GitHub (opens in a new tab)">GitHub</a>`);
  if (p.demo) actions.push(`<a class="btn btn-outline" href="${esc(p.demo)}" target="_blank" rel="noopener noreferrer" aria-label="${esc(p.name)} live demo (opens in a new tab)">Live Demo</a>`);

  card.innerHTML = `${thumb}<div class="project-body"><h3>${esc(p.name)}</h3>${desc}${tags}
    ${actions.length ? `<div class="project-actions">${actions.join("")}</div>` : ""}</div>`;
  grid.appendChild(card);
});

// Active nav link on scroll
const sections = [...document.querySelectorAll("main section[id]")];
const links = [...navLinks.querySelectorAll("a")];
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + e.target.id));
    }
  });
}, { rootMargin: "-40% 0px -55% 0px" });
sections.forEach(s => io.observe(s));

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  const isDark = document.body.classList.contains("dark-mode");

  themeIcon.textContent = isDark ? "☀" : "☾";

  themeToggle.setAttribute(
    "aria-label",
    isDark ? "Switch to light mode" : "Switch to dark mode"
  );
});
