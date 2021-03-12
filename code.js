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