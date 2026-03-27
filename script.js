// ========== SCROLL ET REVEAL ==========

// Sélectionner toutes les sections avec la classe "reveal"
const reveals = document.querySelectorAll(".reveal");

// Fonction pour gérer l'animation au scroll
function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("visible");
    }
  });
}

// Appeler la fonction au scroll
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// --------------------
// SCROLL POUR NAVBAR FIXE
// --------------------

// Récupérer la hauteur de la navbar
const navbarHeight = document.querySelector("nav").offsetHeight;

// Sélectionner tous les liens internes de la navbar
document.querySelectorAll('nav a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // Empêche le scroll par défaut

    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (!targetSection) return;

    // Calculer la position du scroll en soustrayant la hauteur de la navbar
    const topPos = targetSection.offsetTop - navbarHeight;

    window.scrollTo({
      top: topPos,
      behavior: "smooth",
    });
  });
});

// ========== CHATS POP ==========
const images = [
  "chat1.png",
  "chat2.png",
  "chat3.png",
  "chat4.png",
  "chat5.png",
];

document.addEventListener("click", (e) => {
  // 🚫 Empêche les chats sur certains éléments
  if (e.target.closest("button, a, input")) return;

  const maxCats = 20;
  if (document.querySelectorAll(".cat").length > maxCats) return;

  const cat = document.createElement("div");
  cat.classList.add("cat");

  // Choisir une image aléatoire
  const randomImage = images[Math.floor(Math.random() * images.length)];
  cat.style.backgroundImage = `url("./assets/chats-pop/${randomImage}")`;

  // Position
  const size = 100; // même valeur que ton CSS

  cat.style.left = e.pageX - size / 2 + "px";
  cat.style.top = e.pageY - size / 2 + "px";

  document.body.appendChild(cat);

  // Apparition
  setTimeout(() => cat.classList.add("show"), 10);

  // Disparition
  setTimeout(() => cat.classList.remove("show"), 4500);

  // Suppression
  setTimeout(() => cat.remove(), 5000);
});
