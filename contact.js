// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            // For demonstration, we'll just show a success message
            
            // Reset form
            contactForm.reset();
            
            // Show success message
            formSuccess.style.display = 'block';
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                formSuccess.style.display = 'none';
            }, 5000);
        });
    }
    
    // Make navbar transparent initially and add background when scrolled
    const navbar = document.querySelector('.navbar');
    
    function updateNavbar() {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    }
    
    // Initial call
    updateNavbar();
    
    // Add scroll event listener
    window.addEventListener('scroll', updateNavbar);
});
