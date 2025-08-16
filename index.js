
const containers = document.querySelectorAll('.timeline .container');

function toggleOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    containers.forEach(container => {
        const containerTop = container.getBoundingClientRect().top;
        const containerBottom = container.getBoundingClientRect().bottom;

      
        if (containerTop < triggerBottom && containerBottom > 0) {
            container.classList.add('show');
        } else {
            container.classList.remove('show');
        }
    });
}

window.addEventListener('scroll', toggleOnScroll);
window.addEventListener('load', toggleOnScroll);