let color = false;

const setColorNav = () => {
    const s_openData_yPos = document.getElementById('s_openData').getBoundingClientRect().y -40;
    const s_process_yPos = document.getElementById('s_process').getBoundingClientRect().y -40;
    const s_contact_yPos = document.getElementById('s_contact').getBoundingClientRect().y -40;
    let scrollY = window.scrollY;
    const navbar = document.querySelector('.navbar');

    if (s_openData_yPos <= 0 && s_process_yPos > 0 && color == false) {
        navbar.classList.toggle('primary');
        color = true;
    } else if (s_contact_yPos <= 0 && color == true) {
        navbar.classList.toggle('primary');
        color = false;
    } else if (s_openData_yPos >= 0 && color == true) {
        navbar.classList.toggle('primary');
        color = false;
    } else if (s_contact_yPos >= 0 && s_openData_yPos <= 0 && color == false) {
        navbar.classList.toggle('primary');
        color = true;
    }
}

function moveTo(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth', block: 'start'});
}

document.addEventListener('scroll', () => { 
    setColorNav();
})