// Main JavaScript for Lorenzo Fratino's Portfolio Website

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    // Hide loading screen after a short delay
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.classList.add('hidden');
        
        // Remove loading screen from DOM after animation
        setTimeout(() => {
            loadingScreen.remove();
        }, 500);
    }, 800);

    // Initialize all components
    initializeTabs();
    populateContent();
    
    // Add smooth scrolling to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Tab functionality
function initializeTabs() {
    const tabTriggers = document.querySelectorAll('.tab-trigger');
    const tabContents = document.querySelectorAll('.tab-content');

    tabTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const targetTab = trigger.getAttribute('data-tab');
            
            // Remove active class from all triggers and contents
            tabTriggers.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked trigger and corresponding content
            trigger.classList.add('active');
            const targetContent = document.getElementById(targetTab);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}

// Populate content from data
function populateContent() {
    populateEducation();
    populateResponsibilities();
    populateResearchAreas();
    populatePublications();
    populateTeaching();
    populateConferences();
    populateAwards();
}

// Populate education timeline
function populateEducation() {
    const container = document.getElementById('education-timeline');
    if (!container) return;

    container.innerHTML = portfolioData.education.map(edu => `
        <div class="timeline-item">
            <div class="timeline-year">${edu.year}</div>
            <div class="timeline-title">${edu.degree}</div>
            <div class="timeline-subtitle">${edu.institution}</div>
            ${edu.grade ? `<div class="timeline-detail">Grade: ${edu.grade}</div>` : ''}
            ${edu.thesis ? `<div class="timeline-detail"><strong>Thesis:</strong> "${edu.thesis}"</div>` : ''}
            ${edu.supervisor ? `<div class="timeline-detail"><strong>Supervisor:</strong> ${edu.supervisor}</div>` : ''}
        </div>
    `).join('');
}

// Populate responsibilities
function populateResponsibilities() {
    const container = document.getElementById('responsibilities-list');
    if (!container) return;

    container.innerHTML = portfolioData.responsibilities.slice(0, 4).map(resp => `
        <div class="responsibility-item">
            <div class="responsibility-year">${resp.year}</div>
            <div class="responsibility-role">${resp.role}</div>
            <div class="responsibility-event">${resp.event}</div>
            ${resp.location ? `<div class="responsibility-location">${resp.location}</div>` : ''}
        </div>
    `).join('');
}

// Populate research areas
function populateResearchAreas() {
    const container = document.getElementById('research-areas');
    if (!container) return;

    container.innerHTML = portfolioData.researchAreas.map(area => `
        <div class="card research-item">
            <div class="research-image">
                <img src="${area.image}" alt="${area.title} illustration" loading="lazy">
            </div>
            <div class="research-content">
                <div class="card-header">
                    <h3 class="card-title">
                        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                        </svg>
                        ${area.title}
                    </h3>
                </div>
                <div class="card-content">
                    <p class="research-description">${area.description}</p>
                </div>
            </div>
        </div>
    `).join('');
}

// Populate publications
function populatePublications() {
    const container = document.getElementById('publications-list');
    if (!container) return;

    // Take first 6 publications for selected publications
    const selectedPublications = portfolioData.publications.slice(0, 6);

    container.innerHTML = selectedPublications.map(pub => `
        <div class="card publication-item ${pub.type === 'featured' ? 'featured' : ''}">
            <div class="card-content publication-content">
                <div class="publication-header">
                    <div class="publication-badges">
                        <span class="publication-year ${pub.type === 'featured' ? 'featured' : ''}">${pub.year}</span>
                        ${pub.type === 'featured' ? '<span class="publication-featured">Featured</span>' : ''}
                    </div>
                    ${pub.link ? `
                        <a href="${pub.link}" target="_blank" rel="noopener noreferrer" class="publication-link">
                            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                                <polyline points="15,3 21,3 21,9"/>
                                <line x1="10" y1="14" x2="21" y2="3"/>
                            </svg>
                        </a>
                    ` : ''}
                </div>
                
                <h4 class="publication-title">${pub.title}</h4>
                <p class="publication-authors">${pub.authors}</p>
                <div class="publication-journal">
                    <span class="publication-journal-name">${pub.journal}</span>
                    ${pub.volume ? `<span class="publication-volume">${pub.volume}</span>` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

// Populate teaching experience
function populateTeaching() {
    const container = document.getElementById('teaching-timeline');
    if (!container) return;

    container.innerHTML = portfolioData.teaching.map(teach => `
        <div class="timeline-item">
            <div class="timeline-year">${teach.period}</div>
            <div class="timeline-title">${teach.title}</div>
            ${teach.institution ? `<div class="timeline-subtitle">${teach.institution}</div>` : ''}
            ${teach.description ? `<div class="timeline-detail">${teach.description}</div>` : ''}
        </div>
    `).join('');
}

// Populate conferences
function populateConferences() {
    const container = document.getElementById('conferences-list');
    if (!container) return;

    // Take first 6 conferences
    const recentConferences = portfolioData.conferences.slice(0, 6);

    container.innerHTML = recentConferences.map(conf => `
        <div class="conference-item">
            <div class="conference-info">
                <div class="conference-year">${conf.year}</div>
                <div class="conference-event">${conf.event}</div>
                <div class="conference-location">${conf.location}</div>
            </div>
            <span class="conference-type">${conf.type}</span>
        </div>
    `).join('');
}

// Populate awards
function populateAwards() {
    const container = document.getElementById('awards-list');
    if (!container) return;

    container.innerHTML = portfolioData.awards.map(award => `
        <div class="card award-item">
            <div class="card-content">
                <div class="award-header">
                    <div class="award-info">
                        <svg class="award-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="8" r="7"/>
                            <polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88"/>
                        </svg>
                        <div class="award-details">
                            <div class="award-year">${award.year}</div>
                            <h3 class="award-title">${award.title}</h3>
                        </div>
                    </div>
                    ${award.link ? `
                        <a href="${award.link}" target="_blank" rel="noopener noreferrer" class="publication-link">
                            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                                <polyline points="15,3 21,3 21,9"/>
                                <line x1="10" y1="14" x2="21" y2="3"/>
                            </svg>
                        </a>
                    ` : ''}
                </div>
                <p class="award-description">${award.description}</p>
            </div>
        </div>
    `).join('');
}

// CV Download functionality
function downloadCV() {
    showToast("CV download functionality will be implemented soon.");
}

// Toast notification system
function showToast(message, duration = 3000) {
    const toast = document.getElementById('toast');
    const messageElement = toast.querySelector('.toast-message');
    
    messageElement.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, duration);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Add animation styles and observe elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.card, .timeline-item, .conference-item, .responsibility-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Lazy loading for images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        img.classList.add('lazy');
        imageObserver.observe(img);
    });
});

// Smooth scroll behavior for better UX
document.documentElement.style.scrollBehavior = 'smooth';

// Handle window resize for responsive adjustments
window.addEventListener('resize', () => {
    // Debounce resize events
    clearTimeout(window.resizeTimeout);
    window.resizeTimeout = setTimeout(() => {
        // Any resize-specific logic can go here
        console.log('Window resized');
    }, 250);
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
});

// Print styles handling
window.addEventListener('beforeprint', () => {
    document.body.classList.add('printing');
});

window.addEventListener('afterprint', () => {
    document.body.classList.remove('printing');
});

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.timing;
            const loadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`Page load time: ${loadTime}ms`);
        }, 0);
    });
}