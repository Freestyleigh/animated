// Smooth Scroll
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Dynamic Background
const exploreButton = document.getElementById('exploreButton');
const heroSection = document.querySelector('.hero');
const gradients = [
  "linear-gradient(135deg, #16a34a, #0ea5e9)",
  "linear-gradient(135deg, #facc15, #f97316)",
  "linear-gradient(135deg, #9333ea, #e11d48)",
  "linear-gradient(135deg, #3b82f6, #10b981)"
];

exploreButton.addEventListener('click', () => {
  const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
  heroSection.style.background = randomGradient;
});

// Form Submission Alert
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', event => {
  event.preventDefault();
  alert('Thank you for reaching out! We will get back to you soon.');
  contactForm.reset();
});
