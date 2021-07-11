const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

// buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let i = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * i) + 'px)';

// button listener
    // for next button
nextBtn.addEventListener('click', () => {
    if (i >= carouselImages.length -1) return;
    // transition
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    i++;
    carouselSlide.style.transform = 'translateX(' + (-size * i) + 'px)';
});

    // for prev button
prevBtn.addEventListener('click', () => {
    if (i <= 0) return;
    // transition
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    i--;
    carouselSlide.style.transform = 'translateX(' + (-size * i) + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[i].id === 'lastClone') {
        carouselSlide.style.transition = "none";
        i = carouselImages.length -2;
        carouselSlide.style.transform = 'translateX(' + (-size * i) + 'px)';
    }

    if (carouselImages[i].id === 'firstClone') {
        carouselSlide.style.transition = "none";
        i = carouselImages.length - i;
        carouselSlide.style.transform = 'translateX(' + (-size * i) + 'px)';
    }
});