const header = document.querySelector(".header")
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 10) {
        header.style = "padding:1rem 2rem;font-size:0.9em";
    } else {
        header.style = "padding:1.5rem";
    }
})
const observerOptions = {
    rootMargin: "200px 0px 0px 0px",
}
const pullObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.transform = "translateY(0)";
        }

    })
}, observerOptions);
const whyUs = document.querySelectorAll(".whyUs__items__item")
const articles = document.querySelectorAll('.articles__items__item')
articles.forEach(item => {
    pullObserver.observe(item);
})
whyUs.forEach(item => {
    pullObserver.observe(item)
})
const navigation = document.querySelector(".header__navigation")
const menuBtn = document.querySelector(".menuBtn")
const menuBars = document.querySelectorAll(".menuBtn__bar")
const hideWebsite = document.querySelector(".hideWebsite")
menuBtn.addEventListener('click', () => {
    navigation.classList.toggle('activeMenu')
    hideWebsite.classList.toggle("activeMenuPanel")
    menuBars.forEach(item => {
        item.classList.toggle("activeBar")
    })
})