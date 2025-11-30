// ===================================
// CodeZyro - JavaScript
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    initHeader();
    initMobileMenu();
    initHeroAnimations();
    initScrollAnimations();
    initSmoothScroll();
});

// ===================================
// HEADER - Scroll Effect
// ===================================
function initHeader() {
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add scrolled class when past 50px
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }, { passive: true });
}

// ===================================
// MOBILE MENU
// ===================================
function initMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Toggle menu
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        nav.classList.toggle('active');
        document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            nav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !menuToggle.contains(e.target) && nav.classList.contains('active')) {
            menuToggle.classList.remove('active');
            nav.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ===================================
// HERO ANIMATIONS
// ===================================
function initHeroAnimations() {
    createParticles();
    initCounterAnimation();
}

// Create floating particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    const particleCount = window.innerWidth < 768 ? 15 : 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random position and timing
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
        
        // Random size
        const size = Math.random() * 4 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Random opacity
        particle.style.setProperty('--particle-opacity', Math.random() * 0.5 + 0.2);
        
        particlesContainer.appendChild(particle);
    }
}

// Animated counter for stats
function initCounterAnimation() {
    const stats = document.querySelectorAll('.stat[data-target]');
    if (!stats.length) return;
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const stat = entry.target;
                const counter = stat.querySelector('.counter');
                const target = parseInt(stat.dataset.target);
                
                animateCounter(counter, target);
                observer.unobserve(stat);
            }
        });
    }, observerOptions);
    
    stats.forEach(stat => observer.observe(stat));
}

function animateCounter(element, target) {
    const duration = 2000; // 2 seconds
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);
    
    let frame = 0;
    
    const counter = setInterval(() => {
        frame++;
        
        // Easing function (ease-out)
        const progress = frame / totalFrames;
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        
        const currentValue = Math.round(easeProgress * target);
        element.textContent = currentValue;
        
        if (frame === totalFrames) {
            clearInterval(counter);
            element.textContent = target;
        }
    }, frameDuration);
}

// ===================================
// SCROLL ANIMATIONS
// ===================================
function initScrollAnimations() {
    // Elements to animate
    const animateElements = document.querySelectorAll(`
        .section-tag,
        .section-title,
        .section-subtitle,
        .sobre-description,
        .sobre-highlights,
        .code-window,
        .servico-card,
        .processo-step,
        .portfolio-item,
        .contacto-info,
        .contacto-form
    `);
    
    // Add initial state
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Add staggered delay based on element position
                const siblings = Array.from(entry.target.parentElement.children);
                const siblingIndex = siblings.indexOf(entry.target);
                const delay = siblingIndex * 100;
                
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, delay);
                
                // Unobserve after animation
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe all elements
    animateElements.forEach(el => observer.observe(el));
}

// ===================================
// SMOOTH SCROLL
// ===================================
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') return;
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===================================
// FORM HANDLING
// ===================================
const contactForm = document.querySelector('.contacto-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        const btn = this.querySelector('button[type="submit"]');
        
        // Show loading state
        btn.innerHTML = `
            <span>A enviar...</span>
            <svg class="spin" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10" stroke-dasharray="60" stroke-dashoffset="20"/>
            </svg>
        `;
        btn.disabled = true;
        
        // Add spin animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes spin {
                to { transform: rotate(360deg); }
            }
            .spin { animation: spin 1s linear infinite; }
        `;
        document.head.appendChild(style);
    });
}

// ===================================
// PARALLAX EFFECT ON MOUSE MOVE (Optional - Desktop only)
// ===================================
function initParallax() {
    if (window.innerWidth < 1024) return;
    
    const hero = document.querySelector('.hero');
    const glows = document.querySelectorAll('.glow');
    
    if (!hero || !glows.length) return;
    
    hero.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        
        const xPercent = (clientX / innerWidth - 0.5) * 2;
        const yPercent = (clientY / innerHeight - 0.5) * 2;
        
        glows.forEach((glow, index) => {
            const intensity = (index + 1) * 15;
            glow.style.transform = `translate(${xPercent * intensity}px, ${yPercent * intensity}px)`;
        });
    });
}

// Initialize parallax
document.addEventListener('DOMContentLoaded', initParallax);

// ===================================
// TYPING EFFECT FOR CODE WINDOW
// ===================================
function initTypingEffect() {
    const codeWindow = document.querySelector('.window-body code');
    
    if (!codeWindow) return;
    
    const originalHTML = codeWindow.innerHTML;
    
    // Only run on larger screens
    if (window.innerWidth < 768) return;
    
    // Hide initially
    codeWindow.style.opacity = '0';
    
    // Create observer for when code window is visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Start typing effect
                typeCode(codeWindow, originalHTML);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    observer.observe(codeWindow);
}

function typeCode(element, finalHTML) {
    // Code lines to type (with syntax highlighting)
    const lines = [
        { text: '<span class="keyword">const</span> <span class="variable">codezyro</span> = {', delay: 0 },
        { text: '    <span class="property">missão</span>: <span class="string">"Simplificar"</span>,', delay: 400 },
        { text: '    <span class="property">foco</span>: <span class="string">"Resultados"</span>,', delay: 800 },
        { text: '    <span class="property">método</span>: <span class="string">"Ágil"</span>,', delay: 1200 },
        { text: '    ', delay: 1600 },
        { text: '    <span class="function">transformar</span>(<span class="param">problema</span>) {', delay: 1800 },
        { text: '        <span class="keyword">return</span> <span class="variable">solução</span>.<span class="function">digital</span>();', delay: 2200 },
        { text: '    }', delay: 2600 },
        { text: '};', delay: 2800 }
    ];
    
    element.innerHTML = '';
    element.style.opacity = '1';
    
    let currentLine = 0;
    let currentChar = 0;
    let currentHTML = '';
    
    function getPlainText(html) {
        const temp = document.createElement('div');
        temp.innerHTML = html;
        return temp.textContent || temp.innerText;
    }
    
    function type() {
        if (currentLine >= lines.length) {
            // Add blinking cursor at the end
            element.innerHTML += '<span class="typing-cursor">|</span>';
            
            // Remove cursor after 2 seconds
            setTimeout(() => {
                const cursor = element.querySelector('.typing-cursor');
                if (cursor) cursor.remove();
            }, 2000);
            return;
        }
        
        const line = lines[currentLine];
        const plainText = getPlainText(line.text);
        
        if (currentChar === 0) {
            // Starting new line
            if (currentLine > 0) {
                currentHTML += '\n';
            }
        }
        
        if (currentChar < plainText.length) {
            // Type character by character (show plain text while typing)
            const partialText = plainText.substring(0, currentChar + 1);
            const previousLines = lines.slice(0, currentLine).map(l => l.text).join('\n');
            
            element.innerHTML = (previousLines ? previousLines + '\n' : '') + 
                               partialText + 
                               '<span class="typing-cursor">|</span>';
            
            currentChar++;
            
            // Random typing speed for realism
            const speed = Math.random() * 30 + 20;
            setTimeout(type, speed);
        } else {
            // Line complete - show with syntax highlighting
            const previousLines = lines.slice(0, currentLine + 1).map(l => l.text).join('\n');
            element.innerHTML = previousLines + '<span class="typing-cursor">|</span>';
            
            currentLine++;
            currentChar = 0;
            
            // Pause between lines
            setTimeout(type, 200);
        }
    }
    
    // Start typing after a short delay
    setTimeout(type, 300);
}

// Initialize typing effect
document.addEventListener('DOMContentLoaded', initTypingEffect);
