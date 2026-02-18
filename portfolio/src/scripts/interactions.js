// This file contains additional JavaScript functions for handling user interactions, such as animations or form submissions.

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const submitButton = document.querySelector('#submit-button');

    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            // Handle form submission logic here
            alert('Form submitted successfully!');
        });
    }

    if (submitButton) {
        submitButton.addEventListener('click', () => {
            // Add animation or interaction logic here
            submitButton.classList.add('loading');
        });
    }

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});