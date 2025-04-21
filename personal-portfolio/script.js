// Basic form validation
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent default form submission
  
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();
  
  if (name === '' || email === '' || subject === '' || message === '') {
    alert('Please fill out all fields.');
  } else if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
  } else {
    alert('Thank you for contacting me! (Note: Form handling not connected)');
    contactForm.reset(); // Reset form fields
  }
});

// Helper function to validate email
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}

// Highlight active navigation link when clicked
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navLinks.forEach(item => item.classList.remove('active'));
    this.classList.add('active');
  });
});

console.log("Website loaded and active link script running!");
