// Smooth Scroll for Links
const links = document.querySelectorAll('a[href^="#"]');

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
}

// Form Submit Handler
const form = document.getElementById('myForm');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name === '' || email === '' || message === '') {
        alert('Please fill all fields!');
        return;
    }
    
    alert('Thank you, ' + name + '! Your interest has been registered. We will contact you at ' + email + ' soon.');
    
    // Clear form
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
});

// Change Menu Color on Scroll
window.addEventListener('scroll', function() {
    const menuLinks = document.querySelectorAll('.menu a');
    const sections = document.querySelectorAll('[id]');
    
    const scrollPosition = window.scrollY;
    
    for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            for (let j = 0; j < menuLinks.length; j++) {
                menuLinks[j].style.color = '#1a1a1a';
                
                const linkHref = menuLinks[j].getAttribute('href');
                if (linkHref === '#' + sectionId) {
                    menuLinks[j].style.color = '#FF6B35';
                }
            }
        }
    }
});
