const navigation = () => {
    const navBtn = document.querySelector('nav .nav-btn');
    const dropDown = document.querySelector('nav .links');

    navBtn.addEventListener('click', () => {
        navBtn.classList.toggle('active');
        dropDown.classList.toggle('active');
    });
}

export default {
    navigation
}