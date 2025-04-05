const sections = document.querySelectorAll('.section');
const topbarbuttons = document.querySelectorAll('.topbar-button');
const topbarindicator = document.querySelector('.topbar-indicator');

AOS.init();

let activeSection = 0;
let lastActiveSection = 0;

showSection(0);
animateIndicator(activeSection);

function animateIndicator(index){
    let marginLeftValue = parseInt(topbarindicator.style.marginLeft, 10) || 0
    let new_pos = marginLeftValue + (topbarbuttons[index].offsetLeft - topbarindicator.offsetLeft)

    topbarindicator.style.marginLeft = new_pos + 'px';
    topbarindicator.style.width = topbarbuttons[index].offsetWidth + 'px';   
}

function showSection(index) {
    // sections.forEach((section, i) => {
    //     if (i === index) {
    //         section.classList.add('active');
    //         topbarbuttons[i].classList.add('active');
    //     } else {
    //         topbarbuttons[i].classList.remove('active');
    //         section.classList.remove('active');
    //     }
    // });
    sections[index].scrollIntoView({ 
        behavior: 'smooth'
    });   
    
}

// window.addEventListener('wheel', (e) => {
//     if (e.deltaY > 0 && activeSection < sections.length - 1) {
//         activeSection++;
//     } else if (e.deltaY < 0 && activeSection > 0) {
//         activeSection--;
//     }
//     showSection(activeSection);
// });

window.addEventListener('scroll', () => {
    for(i = 0; i < sections.length; i++) {
        if(window.pageYOffset >= sections[i].getBoundingClientRect().top + window.pageYOffset)
        {
            activeSection = i;
        }
    }

    animateIndicator(activeSection);

});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const startTime = performance.now();
            const duration = 1000; 
            const startPosition = window.pageYOffset;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
            const distance = targetPosition - startPosition;

            function scrollStep(timestamp) {
                const currentTime = timestamp - startTime;
                const progress = Math.min(currentTime / duration, 1);
                const easedProgress = 0.5 * (1 - Math.cos(Math.PI * progress)); // Funzione di easing per un'animazione fluida
                window.scrollTo(0, startPosition + distance * easedProgress);

                if (currentTime < duration) {
                    window.requestAnimationFrame(scrollStep);
                }
            }

            window.requestAnimationFrame(scrollStep);
        }
    });
});