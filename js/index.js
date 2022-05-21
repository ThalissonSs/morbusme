const Hambuguer = document.getElementById("hambuguer")

function toggleMenu() {
  const nav = document.getElementById("header-nav")
  nav.classList.toggle('active')
}

Hambuguer.addEventListener('click', toggleMenu)