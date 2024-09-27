document.querySelectorAll('.carousel-container').forEach((container, containerIndex) => {
    let slideIndex = 0;
    const slides = container.querySelectorAll('.carousel-slide');
    const dots = container.querySelectorAll('.dot');

    showSlides(slideIndex);

    function moveSlide(direction) {
        slideIndex += direction;

        // Wrap around when reaching the beginning or the end
        if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        } else if (slideIndex >= slides.length) {
            slideIndex = 0;
        }

        showSlides(slideIndex);
    }

    function currentSlide(index) {
        slideIndex = index;
        showSlides(slideIndex);
    }

    function showSlides(index) {
        // Hide all slides in this container
        slides.forEach(slide => {
            slide.style.display = 'none';
        });

        // Remove active class from all dots in this container
        dots.forEach(dot => {
            dot.classList.remove('active');
        });

        // Show the current slide and highlight the corresponding dot
        slides[index].style.display = 'block';
        dots[index].classList.add('active');
    }

    container.querySelector('.prev').onclick = () => moveSlide(-1);
    container.querySelector('.next').onclick = () => moveSlide(1);
    dots.forEach((dot, dotIndex) => dot.onclick = () => currentSlide(dotIndex));
});
