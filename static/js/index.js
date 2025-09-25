window.HELP_IMPROVE_VIDEOJS = false;

// Trick policies slider functionality
let currentSlideIndex = 0;
const totalSlides = 5;

function showSlide(n) {
    const slides = document.querySelectorAll('.video-slide');
    const dots = document.querySelectorAll('.dot');
    
    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Show current slide
    if (n >= totalSlides) currentSlideIndex = 0;
    if (n < 0) currentSlideIndex = totalSlides - 1;
    
    slides[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active');
}

function changeSlide(direction) {
    currentSlideIndex += direction;
    showSlide(currentSlideIndex);
}

function currentSlide(n) {
    currentSlideIndex = n - 1;
    showSlide(currentSlideIndex);
}

$(document).ready(function() {
    // Check for click events on the navbar burger icon

    var options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 5000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);
	
    bulmaSlider.attach();

    // Initialize trick policies slider
    showSlide(0);
})
