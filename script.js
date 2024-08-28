document.addEventListener('DOMContentLoaded', () => {
    console.log('Document loaded and ready!');
});

document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-menu').classList.toggle('show');
});
