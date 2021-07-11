const carousel = document.querySelector('.carousel-items').children;
const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');
const totalCarousel = carousel.length;
let index = 0;

nextBtn.addEventListener('click', ()=> {
    next('next');
});

prevBtn.addEventListener('click', ()=> {
    next('prev');
})

function next(direction) {
    if (direction == 'next') {
        index++;
        if (index == totalCarousel) {
            index = 0;
        };
    } else {
        if (index == 0) {
            index = totalCarousel - 1;
        } else {
            index --;
        }
    }
    
    for (let i = 0; i < carousel.length; i++) {
        carousel[i].classList.remove('active');
    }
    carousel[index].classList.add('active');
}