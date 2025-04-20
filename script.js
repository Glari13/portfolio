// Show current date/time in the footer
document.querySelector('footer p').textContent += ` ${new Date().toLocaleString()}`;

// Toggle between light and dark mode
document.querySelector('header').addEventListener('dblclick', () => {
    document.body.classList.toggle('dark-mode');
});

// Form validation
document.querySelector('form').addEventListener('submit', (e) => {
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    if (!name || !email) {
        e.preventDefault();
        alert('Please fill out all fields');
    }
});

// Animated typing effect for name or title
const title = 'Personal Portfolio';
let i = 0;
const typingEffect = setInterval(() => {
    document.title = title.substring(0, i + 1);
    i++;
    if (i === title.length) {
        clearInterval(typingEffect);
    }
}, 100);
