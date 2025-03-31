const sections = document.querySelectorAll('.section');
const topbarbuttons = document.querySelectorAll('.topbar-button');


let activeSection = 0;

function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function showSection(index) {
    sections.forEach((section, i) => {
        if (i === index) {
            section.classList.add('active');
            topbarbuttons[i].classList.add('active');
        } else {
            topbarbuttons[i].classList.remove('active');
            section.classList.remove('active');
        }
    });
}

showSection(activeSection);

window.addEventListener('wheel', (e) => {
    if (e.deltaY > 0 && activeSection < sections.length - 1) {
        activeSection++;
    } else if (e.deltaY < 0 && activeSection > 0) {
        activeSection--;
    }
    showSection(activeSection);
});