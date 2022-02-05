const targetAnimation = document.querySelectorAll('[data-animation]')
const innerLinks = document.querySelectorAll('.menu a[href^="#"]')
const humburguer = document.querySelector('.humburguer svg')
const menu = document.querySelector('.menu')
const shadowContainer = document.querySelector('.shadow-container')
let timer = 0

function animationScroll() {
  const windowTop = window.pageYOffset + (window.innerHeight * 2) / 2

  targetAnimation.forEach(element => {
    if (windowTop > element.offsetTop) element.classList.add('animate')
  })

  handleToggleMenu(false)
}

animationScroll()

window.addEventListener('scroll', () => {
  clearTimeout(timer)
  timer = setTimeout(animationScroll, 20)
})

function smoothScroll(event) {
  event.preventDefault()

  const href = event.currentTarget.getAttribute('href')
  const section = document.querySelector(href)

  window.scrollTo({
    top: section.offsetTop,
    behavior: 'smooth',
  })
}

innerLinks.forEach(link => link.addEventListener('click', smoothScroll))

function handleToggleMenu(toggle = true) {
  const linesSvg = Array.from(humburguer.children)

  if (toggle) {
    linesSvg.forEach(line => line.classList.toggle('active'))
    menu.classList.toggle('menu-mobile')
    shadowContainer.classList.toggle('active')
  } else {
    linesSvg.forEach(line => line.classList.remove('active'))
    this.removeMenu()
  }
}

function removeMenu() {
  menu.classList.remove('menu-mobile')
  menu.classList.remove('menu-mobile')
  shadowContainer.classList.remove('active')
}

humburguer.addEventListener('click', handleToggleMenu)
shadowContainer.addEventListener('click', removeMenu)
