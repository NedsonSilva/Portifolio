const elementH3 = document.querySelector('#intro h2')
const target = document.querySelectorAll('[data-animation]')
const innerLinks = document.querySelectorAll('.menu a[href^="#"]')
const humburguer = document.querySelector('.humburguer svg')
const menu = document.querySelector('.menu')
let timer = 0

function animationScroll() {
   const windowTop = window.pageYOffset + ((window.innerHeight * 2) / 2)
   target.forEach(element => {
      if (windowTop > element.offsetTop) element.classList.add('animate')
   })
}

function smoothScroll(event) {
   event.preventDefault()
   const href = event.currentTarget.getAttribute('href')
   const section = document.querySelector(href)
   window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth'
   })
}

animationScroll()

window.addEventListener('scroll', () => {
   clearTimeout(timer)
   timer = setTimeout(animationScroll, 20)
})

innerLinks.forEach(link => link.addEventListener('click', smoothScroll))

function toggleMenu() {
   const linesSvg = humburguer.children
   Array.from(linesSvg).forEach(line => line.classList.toggle('active'))
   menu.classList.toggle('menu-mobile')
}

humburguer.addEventListener('click', toggleMenu)