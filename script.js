function showDiv(divId) {
    var buttons = document.getElementsByTagName('button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active-button');
    }

    var selectedButton = document.getElementById(divId + 'Button');
    selectedButton.classList.add('active-button');

    var divs = document.getElementsByClassName('basic-details');
    for (var j = 0; j < divs.length; j++) {
        divs[j].classList.add('hidden');
    }
    var selectedDiv = document.getElementById(divId);
    selectedDiv.classList.remove('hidden');
}


var slideIndex = 0;
var slides = document.getElementsByClassName('carousel-slide')[0].children;
var autoplayInterval = 3000; 

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[slideIndex].style.display = 'block';
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function autoplay() {
    nextSlide();
}

setInterval(autoplay, autoplayInterval);

showSlide(slideIndex);