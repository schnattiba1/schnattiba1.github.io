document.addEventListener('DOMContentLoaded', function() {

    // selects all the class 'slide'
    const slides = document.querySelectorAll('.slide');

    slides.forEach((slide, index) => {
        slide.style.transition = 'none';
        slide.style.transform = `translateX(${index * 100}%)`;
    });

    // enabling transitions after the page loaded.
    setTimeout(() => {
        slides.forEach(slide => {
            slide.style.transition = '';
        });
    }, 100);

    // the current slide counter
    let currSlide = 0;
    
    // selecting the next slide button 
    const nextSlide = document.querySelector('.btn-next');

    // selecting the previous slide button 
    const prevSlide = document.querySelector('.btn-prev');

    // maximum number of slides
    const maxSlide = slides.length - 1;

    nextSlide.addEventListener('click', function() {
       
        currSlide++;

        if (currSlide > maxSlide) {
            currSlide = 0;
        }

    
        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(${100 * (index - currSlide)}%)`;
        });
    });

    prevSlide.addEventListener('click', function() {
        currSlide--;

        if (currSlide < 0) {
            currSlide = maxSlide;
        }

        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(${100 * (index - currSlide)}%)`;
        });
    });

    const isPageRefreshed = sessionStorage.getItem('pageLoadTime');

    // If the page is refreshed, disable transition
    if (isPageRefreshed) {
        slides.forEach(slide => {
            slide.style.transition = 'none';
        });
    }
});