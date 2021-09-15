// main-nav-active
const brg = document.querySelector(".nav__burger");
const nav = document.querySelector(".main-nav");
const closeBtn = document.querySelector(".nav__burger-close");
const links = document.querySelectorAll(".main-nav__link")
brg.addEventListener('click', function () {
    nav.classList.add("main-nav-active")
})
closeBtn.addEventListener('click', function () {
    nav.classList.remove("main-nav-active");
})

links.forEach(link => link.addEventListener('click', function () {
    nav.classList.remove("main-nav-active");
}))