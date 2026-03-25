// ==================== Navigation Smooth Scroll ====================
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== Active Navigation Link ====================
window.addEventListener('scroll', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 100) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentSection) {
            link.classList.add('active');
        }
    });
});

// ==================== Parallax Effect ====================
window.addEventListener('scroll', function() {
    const heroBackground = document.querySelector('.hero-background');
    const scrollPosition = window.scrollY;
    const heroHeight = document.querySelector('.hero').clientHeight;
    
    if (scrollPosition < heroHeight) {
        heroBackground.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    }
});

// ==================== Intersection Observer for Animations ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.animation = `fadeInUp 0.8s ease-out ${index * 0.1}s both`;
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe portfolio articles
document.querySelectorAll('.portfolio-article').forEach(item => {
    item.style.opacity = '0';
    observer.observe(item);
});

// ==================== Article Number Counter Animation ====================
const articleNumbers = document.querySelectorAll('.article-number');
articleNumbers.forEach((number, index) => {
    number.style.animationDelay = `${index * 0.1}s`;
});

// ==================== Image Lazy Loading with Fade Effect ====================
const images = document.querySelectorAll('.article-image, .featured-image');
images.forEach(img => {
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.6s ease-out';
    
    if (img.complete) {
        img.style.opacity = '1';
    } else {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
    }
});

// ==================== Mouse Tracking Effect on Articles ====================
document.querySelectorAll('.portfolio-article').forEach(article => {
    article.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) * 0.01;
        const rotateY = (centerX - x) * 0.01;
        
        this.style.transform = `translateX(10px) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    article.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(10px) perspective(1000px) rotateX(0) rotateY(0)';
    });
});

// ==================== Scroll Progress Indicator ====================
window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    // Optional: You can use this for a progress bar
    // document.querySelector('.progress-bar').style.width = scrollPercent + '%';
});

// ==================== Text Highlight on Scroll ====================
const textElements = document.querySelectorAll('.article-text, .article-title');
textElements.forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
        this.style.textShadow = '0 0 10px rgba(212, 165, 116, 0.3)';
    });
    
    element.addEventListener('mouseleave', function() {
        this.style.textShadow = 'none';
    });
});

// ==================== Author Avatar Interaction ====================
const authorAvatar = document.querySelector('.author-avatar');
if (authorAvatar) {
    authorAvatar.addEventListener('mouseover', function() {
        this.style.animation = 'spin 0.6s ease-in-out';
    });
}

// Add spin animation
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        0% { transform: scale(1.1) rotate(5deg); }
        50% { transform: scale(1.15) rotate(180deg); }
        100% { transform: scale(1.1) rotate(360deg); }
    }
`;
document.head.appendChild(style);

// ==================== Smooth Color Transition on Scroll ====================
window.addEventListener('scroll', function() {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    
    if (scrollPercent > 20) {
        document.querySelector('.navbar').style.backdropFilter = 'blur(15px)';
    } else {
        document.querySelector('.navbar').style.backdropFilter = 'blur(10px)';
    }
});

// ==================== Article Hover Sound Effect (Optional) ====================
document.querySelectorAll('.portfolio-article').forEach(article => {
    article.addEventListener('mouseenter', function() {
        // Visual feedback
        this.style.boxShadow = '0 12px 35px rgba(212, 165, 116, 0.25)';
    });
    
    article.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 8px 25px rgba(212, 165, 116, 0.15)';
    });
});

// ==================== Dynamic Content Loading Animation ====================
window.addEventListener('load', function() {
    const portfolio = document.querySelector('.portfolio');
    if (portfolio) {
        portfolio.style.animation = 'fadeIn 0.8s ease-out';
    }
});

// ==================== Scroll to Top Button (Optional Enhancement) ====================
const scrollButton = document.createElement('button');
scrollButton.innerHTML = '↑';
scrollButton.style.cssText = `
    position: fixed;
    bottom: 100px;
    right: 20px;
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, #d4a574, #c99560);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    z-index: 99;
    font-size: 20px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(212, 165, 116, 0.3);
`;

document.body.appendChild(scrollButton);

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
});

scrollButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollButton.addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.1)';
});

scrollButton.addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
});

// ==================== Keyboard Navigation ====================
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowDown') {
        window.scrollBy({
            top: 100,
            behavior: 'smooth'
        });
    } else if (e.key === 'ArrowUp') {
        window.scrollBy({
            top: -100,
            behavior: 'smooth'
        });
    }
});

// ==================== Page Load Complete ====================
console.log('Portfolio JavaScript loaded successfully!');
