const menu = document.querySelector(".menu_img")
const links = document.querySelector(".links")

menu.addEventListener('click', () => {
    links.classList.toggle('mobile-menu')
})