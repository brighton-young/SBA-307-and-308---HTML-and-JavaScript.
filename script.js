// External JavaScript

// Function to validate the contact form
function validateForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.length < 2) {
        alert('Please enter a valid name');
        return false;
    }

    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return false;
    }

    if (message.length < 10) {
        alert('Please enter a message with at least 10 characters');
        return false;
    }

    alert('Form submitted successfully!');
    // Here you would typically send the form data to a server
    return true;
}

// Function to toggle mobile menu
function toggleMobileMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('show');
}

// Function to handle smooth scrolling
function smoothScroll(target) {
    const element = document.querySelector(target);
    window.scrollTo({
        top: element.offsetTop - 80, // Adjust for fixed header
        behavior: 'smooth'
    });
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', validateForm);
    }

    const mobileMenuButton = document.getElementById('mobile-menu');
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', toggleMobileMenu);
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            smoothScroll(this.getAttribute('href'));
        });
    });

    // Simple animation on scroll
    window.addEventListener('scroll', function() {
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach(element => {
            const position = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            if (position < screenPosition) {
                element.classList.add('show');
            }
        });
    });
});

// Example of using a loop and collection
const services = ['Web Design', 'UI/UX Design', 'Responsive Development', 'SEO Optimization'];
const serviceList = document.getElementById('service-list');

if (serviceList) {
    services.forEach(service => {
        const li = document.createElement('li');
        li.textContent = service;
        serviceList.appendChild(li);
    });
}

// Simple countdown timer for a promotion (example of using setInterval)
function startCountdown() {
    const countdownElement = document.getElementById('countdown');
    if (countdownElement) {
        let timeLeft = 24 * 60 * 60; // 24 hours in seconds

        const countdownTimer = setInterval(function() {
            const hours = Math.floor(timeLeft / 3600);
            const minutes = Math.floor((timeLeft % 3600) / 60);
            const seconds = timeLeft % 60;

            countdownElement.textContent = `${hours}h ${minutes}m ${seconds}s`;

            if (timeLeft <= 0) {
                clearInterval(countdownTimer);
                countdownElement.textContent = 'Promotion ended';
            }

            timeLeft--;
        }, 1000);
    }
}

startCountdown();
