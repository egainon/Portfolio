/*Le scroll */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

// Les CHATS POP
const images = [
  "chat1.png",
  "chat2.png",
  "chat3.png",
  "chat4.png",
  "chat5.png",
];

document.addEventListener("click", (e) => {
  const cat = document.createElement("div");
  cat.classList.add("cat");

  // Choisir une image aléatoire
  const randomImage = images[Math.floor(Math.random() * images.length)];
  cat.style.backgroundImage = `url("./assets/chats-pop/${randomImage}")`;

  // Position
  cat.style.left = e.pageX - 40 + "px";
  cat.style.top = e.pageY - 40 + "px";

  document.body.appendChild(cat);

  // Apparition
  setTimeout(() => cat.classList.add("show"), 10);

  // Disparition
  setTimeout(() => cat.classList.remove("show"), 4500);

  // Suppression
  setTimeout(() => cat.remove(), 5000);
});
