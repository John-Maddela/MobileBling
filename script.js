// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  
  // Form submission handler
  const form = document.getElementById('registerForm');
  const message = document.getElementById('form-message');
  
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Show success message
      message.innerHTML = '<div class="alert alert-success">Thank you! Your appointment request has been submitted. We\'ll contact you soon.</div>';
      
      // Reset form
      form.reset();
      
      // Hide message after 5 seconds
      setTimeout(function() {
        message.innerHTML = '';
      }, 5000);
    });
  }
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = target.offsetTop - navbarHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Ensure hero content is visible after page load
  setTimeout(function() {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
      heroContent.style.opacity = '1';
      heroContent.style.visibility = 'visible';
    }
  }, 100);
  
  // Add loading state to carousel
  const carousel = document.getElementById('heroCarousel');
  if (carousel) {
    carousel.addEventListener('slide.bs.carousel', function () {
      // Optional: Add any transition effects here
    });
  }
  
  // Ensure images are loaded before showing content
  const heroImages = document.querySelectorAll('.hero-img');
  let imagesLoaded = 0;
  
  heroImages.forEach(img => {
    if (img.complete) {
      imagesLoaded++;
    } else {
      img.addEventListener('load', function() {
        imagesLoaded++;
        if (imagesLoaded === heroImages.length) {
          document.querySelector('.hero-content').style.opacity = '1';
        }
      });
    }
  });
  
  // Fallback to show content after 2 seconds regardless
  setTimeout(function() {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
      heroContent.style.opacity = '1';
      heroContent.style.visibility = 'visible';
    }
  }, 2000);

});
