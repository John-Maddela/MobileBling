// Hero slideshow loop
let slides = document.querySelectorAll('.slideshow .slide');
let index = 0;

function showSlide() {
  slides.forEach((slide, i) => slide.classList.toggle('active', i === index));

  // Animate hero text each slide change
  const heroContent = document.querySelector('.hero-content');
  heroContent.classList.remove('animate');
  void heroContent.offsetWidth; // restart animation
  heroContent.classList.add('animate');

  index = (index + 1) % slides.length;
}
showSlide();
setInterval(showSlide, 5000);

// Appointment form
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('form-message').textContent = "Thank you! We will contact you soon.";
    this.reset();
});
