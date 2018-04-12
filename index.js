'use strict';

var color = false;

var setColorNav = function setColorNav() {
    var section_01 = document.getElementById('s_openData').getBoundingClientRect().y - 40;
    var section_02 = document.getElementById('s_process').getBoundingClientRect().y - 40;
    var section_03 = document.getElementById('s_schedule').getBoundingClientRect().y - 40;
    var section_04 = document.getElementById('s_projects').getBoundingClientRect().y - 40;
    var scrollY = window.scrollY;
    var navbar = document.querySelector('.navbar');

    if (section_01 >= 0 && color == true) {
        navbar.classList.toggle('primary');
        color = false;
    } else if (section_01 <= 0 && section_02 > 0 && color == false) {
        navbar.classList.toggle('primary');
        color = true;
    } else if (section_02 <= 0 && section_03 > 0 && color == true) {
        navbar.classList.toggle('primary');
        color = false;
    } else if (section_03 <= 0 && section_04 > 0 && color == false) {
        navbar.classList.toggle('primary');
        color = true;
    } else if (section_04 <= 0 && color == true) {
        navbar.classList.toggle('primary');
        color = false;
    }
};

function moveTo(id) {
    var element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.addEventListener('scroll', function () {
    setColorNav();
});