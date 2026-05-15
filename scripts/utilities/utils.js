const navigation = () => {
    const navBtn = document.querySelector('nav .nav-btn');
    const dropDown = document.querySelector('nav .links');

    navBtn.addEventListener('click', () => {
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