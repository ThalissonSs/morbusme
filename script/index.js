const Hambuguer = document.getElementById("hambuguer")

function toggleMenu() {
  const nav = document.getElementById("nav")
  nav.classList.toggle('active')
}

Hambuguer.addEventListener('click', toggleMenu)