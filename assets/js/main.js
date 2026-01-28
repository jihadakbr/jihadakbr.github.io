// Theme toggle functionality
const themeToggleBtn = document.getElementById('theme-toggle');
const themeToggleMobileBtn = document.getElementById('theme-toggle-mobile');
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
const themeToggleDarkIconMobile = document.getElementById('theme-toggle-dark-icon-mobile');
const themeToggleLightIconMobile = document.getElementById('theme-toggle-light-icon-mobile');

// Function to set theme
function setTheme(theme) {
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        themeToggleLightIcon.classList.remove('hidden');
        themeToggleDarkIcon.classList.add('hidden');
        themeToggleLightIconMobile.classList.remove('hidden');
        themeToggleDarkIconMobile.classList.add('hidden');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.classList.remove('dark');
        themeToggleDarkIcon.classList.remove('hidden');
        themeToggleLightIcon.classList.add('hidden');
        themeToggleDarkIconMobile.classList.remove('hidden');
        themeToggleLightIconMobile.classList.add('hidden');
        localStorage.setItem('theme', 'light');
    }
}

// Check for saved theme preference or default to system preference
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme) {
    setTheme(savedTheme);
} else if (systemPrefersDark) {
    setTheme('dark');
} else {
    setTheme('light');
}

// Toggle theme on button click
themeToggleBtn.addEventListener('click', function() {
    if (document.documentElement.classList.contains('dark')) {
        setTheme('light');
    } else {
        setTheme('dark');
    }
});

themeToggleMobileBtn.addEventListener('click', function() {
    if (document.documentElement.classList.contains('dark')) {
        setTheme('light');
    } else {
        setTheme('dark');
    }
});

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
    }
});

// Mobile menu toggle
document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});

// // Show more certifications
// document.getElementById('show-more-certs').addEventListener('click', function() {
//     const moreCerts = document.getElementById('more-certs');
//     const button = document.getElementById('show-more-certs');
    
//     if (moreCerts.classList.contains('hidden')) {
//         moreCerts.classList.remove('hidden');
//         button.innerHTML = 'Show Less <i class="fas fa-chevron-up ml-1"></i>';
//     } else {
//         moreCerts.classList.add('hidden');
//         button.innerHTML = 'Show More <i class="fas fa-chevron-down ml-1"></i>';
//     }
// });

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