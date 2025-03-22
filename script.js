const sections = document.querySelectorAll('.section');
let activeSection = 0;

function showSection(index) {
    sections.forEach((section, i) => {
        if (i === index) {
            section.classList.add('active');
        } else {
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