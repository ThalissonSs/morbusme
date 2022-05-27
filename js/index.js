const Hambuguer = document.getElementById("hambuguer")
var checkboxes = document.querySelectorAll(".limited")
var checkboxes2 = document.querySelectorAll(".limited2")
const btn = document.getElementById("btn")
var selecionados = 0
var selecionados2 = 0

const numeroMaximoCheckboxSelecionados = 3
var numeroCheckboxSelecionados = 0

function toggleMenu() {
  const nav = document.getElementById("header-nav")
  nav.classList.toggle('active')
}

function checkboxSelecionado(e) {
  if (e.checked) {
    if (numeroCheckboxSelecionados >= numeroMaximoCheckboxSelecionados) {
      e.checked = false
    } else {
      numeroCheckboxSelecionados += 1
      console.log(numeroCheckboxSelecionados)
    }
  } else {
    numeroCheckboxSelecionados -= 1
    console.log(numeroCheckboxSelecionados)
  }
}

Hambuguer.addEventListener('click', toggleMenu)
btn.addEventListener('click', function(e) {
  e.preventDefault()
  selecionados = 0
  selecionados2 = 0

  checkboxes2.forEach(function(el) {
    if (el.checked) {
      selecionados2++
    }
  })

  checkboxes.forEach(function(el) {
    if (el.checked) {
      selecionados++
    }
  })

  if (selecionados > 3 || selecionados2 > 3) {
    alert("Por favor selecione apenas 3 doenças!")
  } if (selecionados === 3) {
    window.location.href = "tuberculose.html"
  } if (selecionados2 === 3) {
    window.location.href = "pressao-baixa.html"
  }
})