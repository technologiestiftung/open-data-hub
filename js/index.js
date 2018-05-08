'use strict';

var currentColor = false;

var setColorNav = function setColorNav() {
    var section_01 = document.getElementById('s_openData').getBoundingClientRect().top - 40;
    var section_02 = document.getElementById('s_process').getBoundingClientRect().top - 40;
    var section_03 = document.getElementById('s_schedule').getBoundingClientRect().top - 40;
    var section_04 = document.getElementById('s_projects').getBoundingClientRect().top - 40;
    var scrollY = window.scrollY;
    var navbar = document.querySelector('.navbar');

    if (section_01 >= 0 && currentColor == true) {
        navbar.classList.toggle('primary');
        currentColor = false;
    } else if (section_01 <= 0 && section_02 > 0 && currentColor == false) {
        navbar.classList.toggle('primary');
        currentColor = true;
    } else if (section_02 <= 0 && section_03 > 0 && currentColor == true) {
        navbar.classList.toggle('primary');
        currentColor = false;
    } else if (section_03 <= 0 && section_04 > 0 && currentColor == false) {
        navbar.classList.toggle('primary');
        currentColor = true;
    } else if (section_04 <= 0 && currentColor == true) {
        navbar.classList.toggle('primary');
        currentColor = false;
    }
};

function moveTo(id) {
    var element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.addEventListener('scroll', function () {
    setColorNav();
});