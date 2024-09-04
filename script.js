document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');
    document.querySelector('section').classList.toggle('dark-mode');

    
    let links = document.querySelectorAll('nav ul li a');
    links.forEach(link => link.classList.toggle('dark-mode'));
});
function revealOnScroll() {
    let reveals = document.querySelectorAll('.reveal');

    reveals.forEach(function(reveal) {
        let windowHeight = window.innerHeight;
        let elementTop = reveal.getBoundingClientRect().top;
        let elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('active');
        } else {
            reveal.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);