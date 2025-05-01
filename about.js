// Testimonial slider functionality
document.addEventListener('DOMContentLoaded', function() {
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;
    
    // Show the first testimonial initially
    testimonialItems[currentIndex].classList.add('active');
    
    // Function to show a specific testimonial
    function showTestimonial(index) {
        // Remove active class from all testimonials
        testimonialItems.forEach(item => {
            item.classList.remove('active');
        });
        
        // Add active class to the current testimonial
        testimonialItems[index].classList.add('active');
    }
    
    // Event listener for next button
    nextBtn.addEventListener('click', function() {
        currentIndex++;
        if (currentIndex >= testimonialItems.length) {
            currentIndex = 0;
        }
        showTestimonial(currentIndex);
    });
    
    // Event listener for previous button
    prevBtn.addEventListener('click', function() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = testimonialItems.length - 1;
        }
        showTestimonial(currentIndex);
    });
    
    // Auto-rotate testimonials every 5 seconds
    setInterval(function() {
        currentIndex++;
        if (currentIndex >= testimonialItems.length) {
            currentIndex = 0;
        }
        showTestimonial(currentIndex);
    }, 5000);
});
