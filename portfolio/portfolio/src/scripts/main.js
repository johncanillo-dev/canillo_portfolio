document.addEventListener('DOMContentLoaded', () => {
    // Initialize the portfolio
    initPortfolio();

    // Add event listeners for interactive elements
    setupEventListeners();
});

function initPortfolio() {
    // Code to initialize the portfolio, such as loading content or setting up the layout
}

function setupEventListeners() {
    // Example: Add click event to navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetSection = document.querySelector(link.getAttribute('href'));
            scrollToSection(targetSection);
        });
    });
}

function scrollToSection(target) {
    // Smooth scroll to the target section
    target.scrollIntoView({ behavior: 'smooth' });
}