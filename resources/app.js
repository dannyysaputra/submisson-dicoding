var myIndex = 0;
autoSlide();

function autoSlide() {
    var i;
    var x = document.getElementsByClassName('carousel-image');
    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 2000);
}