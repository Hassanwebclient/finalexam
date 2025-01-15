// Handle Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from reloading the page
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Check if all fields are filled
    if (name && email && message) {
        // Success Message
        document.getElementById('responseMessage').textContent = "Thank you for contacting us! We will get back to you soon.";
        document.getElementById('responseMessage').style.color = 'green';
        document.getElementById('contactForm').reset();  // Reset the form
    } else {
        // Error Message
        document.getElementById('responseMessage').textContent = "Please fill out all fields.";
        document.getElementById('responseMessage').style.color = 'red';
    }
});