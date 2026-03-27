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

//Le chat qui marche
const cat = document.getElementById("walking-cat");

document.addEventListener("click", (e) => {
  // Stoppe tout mouvement précédent si on clique encore
  cat.classList.remove("walking");

  // Position initiale du chat au point du clic
  cat.style.left = e.pageX - 32 + "px";
  cat.style.top = e.pageY - 32 + "px";
  cat.style.display = "block";
  cat.classList.add("walking");

  // Destination : droite de la page
  const targetX = window.innerWidth;

  const speed = 2; // px par frame, plus petit = plus lent

  function move() {
    let currentX = parseInt(cat.style.left);
    if (currentX + 64 < targetX) {
      // +64 pour largeur du chat
      cat.style.left = currentX + speed + "px";
      requestAnimationFrame(move);
    } else {
      cat.style.display = "none"; // disparaît après avoir quitté l'écran
      cat.classList.remove("walking");
    }
  }

  move();
});
