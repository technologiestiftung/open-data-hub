import './styles/root.scss';

const test = () => {
    console.log('input');
};

let color = false;

const setColorNav = () => {
    let scrollY = window.scrollY;
    const navbar = document.querySelector('.navbar');

    if (scrollY > 889 && scrollY < 1200 && color == false) {
        navbar.classList.toggle('primary');
        color = true;
    } else if (scrollY > 6076 && color == true) {
        navbar.classList.toggle('primary');
        color = false;
    } else if (scrollY < 890 && color == true) {
        navbar.classList.toggle('primary');
        color = false;
    } else if (scrollY < 6077 && scrollY > 889 && color == false) {
        navbar.classList.toggle('primary');
        color = true;
    }
}

document.addEventListener('scroll', () => { 
    setColorNav();
})