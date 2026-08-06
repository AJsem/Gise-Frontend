const scrolledNav = () => {
    const navBar = document.querySelector("nav");

    window.addEventListener("scroll", () => {
        if(window.scrollY > 100)
            navBar.classList.add("scrolled");
        else
            navBar.classList.remove("scrolled");
    })
}

const nameLink = () => {
    const nameCont = document.querySelector("nav div.name-logo");

    nameCont.addEventListener("click", () => window.location.href = window.location.origin);
}

const inView = () => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);

        visible.forEach(entry => {
            entry.target.classList.add("show");
            // observer.unobserve(entry.target);
        });
    }, {
        threshold: 0.1
    });

    reveals.forEach(reveal => observer.observe(reveal));
}

const navigation = () => {
    inView();
    nameLink();
    scrolledNav();
    const navBtn = document.querySelector('nav .nav-btn');
    const dropDown = document.querySelector('nav .links');

    navBtn.addEventListener('click', () => {
        // if(navBtn.classList.contains)
        navBtn.classList.toggle('active');
        dropDown.classList.toggle('active');
    });
}

const updateYear = () => {
    const spanYear = document.querySelector("footer span.year");
    const date = new Date();
    
    spanYear.textContent = date.getFullYear();
}

export default {
    navigation,
    updateYear
}