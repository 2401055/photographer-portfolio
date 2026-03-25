// Smooth scroll behavior for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        
        // Scroll to hero section for home link
        if (targetId === '#home') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            // For other links, you can add more sections later
            console.log('Navigating to:', targetId);
        }
    });
});

// Add active state to navigation links based on scroll position
window.addEventListener('scroll', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Add active class to home link when at top
    if (window.scrollY < 100) {
        navLinks[0].classList.add('active');
    }
});

// Parallax effect for hero background
window.addEventListener('scroll', function() {
    const heroBackground = document.querySelector('.hero-background');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition < window.innerHeight) {
        heroBackground.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    }
});

// Add fade-in animation to hero content on page load
window.addEventListener('load', function() {
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.animation = 'fadeIn 1s ease-out';
});
