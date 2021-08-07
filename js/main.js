const navBar = document.querySelector('nav')
const myNav = document.getElementById('nav-bar')
const navLinks = document.querySelectorAll('li')
const hamMenu = document.getElementById('ham-menu')

hamMenu.addEventListener('click', () => {
    myNav.classList.toggle('active')
})

navLinks.forEach((navLinks) => {
    navLinks.addEventListener('click', () => {
        myNav.classList.remove('active')
    })
})

window.onscroll = function () {
    const pos = document.documentElement.scrollTop
    const calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scroll = (pos * 100) / calcHeight
    document.getElementById('progress').style.width = `${scroll}%`

    // SCroll To top btn
    let scrollTopBtn = document.getElementById('scroll-top-btn')
    if(pos > 300) {
        scrollTopBtn.style.display = 'grid'
    }
    else {
        scrollTopBtn.style.display = 'none'
    }

    scrollTopBtn.addEventListener('click', () => {
        document.documentElement.scrollTop = 0
    })

    // Sticky NavBar
    if(pos > 0) {
        navBar.classList.add('sticky')
    }
    else {
        navBar.classList.remove('sticky')
    }
}