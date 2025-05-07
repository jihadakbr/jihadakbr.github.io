// Mobile menu toggle
document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});

// Show more certifications
document.getElementById('show-more-certs').addEventListener('click', function() {
    const moreCerts = document.getElementById('more-certs');
    const button = document.getElementById('show-more-certs');
    
    if (moreCerts.classList.contains('hidden')) {
        moreCerts.classList.remove('hidden');
        button.innerHTML = 'Show Less <i class="fas fa-chevron-up ml-1"></i>';
    } else {
        moreCerts.classList.add('hidden');
        button.innerHTML = 'Show More <i class="fas fa-chevron-down ml-1"></i>';
    }
});

// Scroll animation
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

sections.forEach(section => {
    observer.observe(section);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        document.getElementById('mobile-menu').classList.add('hidden');
    });
});