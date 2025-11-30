// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
}

// Year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Filter buttons
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;

    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    projectCards.forEach((card) => {
      const category = card.dataset.category;
      if (filter === "all" || filter === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Details overlay
const overlay = document.getElementById("detailsOverlay");
const detailPanels = overlay
  ? overlay.querySelectorAll(".details-panel")
  : [];

function openDetails(targetId) {
  if (!overlay) return;

  overlay.classList.add("active");
  detailPanels.forEach((panel) => {
    panel.classList.toggle("active", panel.id === targetId.replace("#", ""));
  });
}

function closeDetails() {
  if (!overlay) return;
  overlay.classList.remove("active");
  detailPanels.forEach((panel) => panel.classList.remove("active"));
}

// Open detail from buttons
document.querySelectorAll(".details-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-target");
    openDetails(target);
  });
});

// Close when clicking close buttons
overlay?.querySelectorAll("[data-close]").forEach((btn) => {
  btn.addEventListener("click", closeDetails);
});

// Close when clicking outside panel
overlay?.addEventListener("click", (e) => {
  if (e.target === overlay) {
    closeDetails();
  }
});
