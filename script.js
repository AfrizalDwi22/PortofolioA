document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            if (
                event.button !== 0 ||
                event.metaKey ||
                event.ctrlKey ||
                event.shiftKey ||
                event.altKey
            ) {
                return;
            }

            event.preventDefault();

            const href = this.getAttribute('href');

            document.body.style.animation = 'fadeOut 0.3s forwards';

            document.body.addEventListener('animationend', function handler() {
                document.body.removeEventListener('animationend', handler);
                window.location.href = href;
            })
        })
    })
})