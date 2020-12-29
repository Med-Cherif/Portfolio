// navbar when i scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 0)
})
// menu of navbar in small screens
let menuToggle = () => {
    const toggle = document.querySelector('.toggle')
    const menu = document.querySelector('.menu')
    toggle.classList.toggle('active')
    menu.classList.toggle('active')
}
// Smooth scroll
var scroll = new SmoothScroll('a[href*="#"]');