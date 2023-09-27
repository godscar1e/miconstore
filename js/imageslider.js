document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".secondaryblock__slider");
    const slides = slider.querySelectorAll(".slide");
    let currentIndex = 1; 
    const intervalTime = 15000;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = "block";
            } else {
                slide.style.display = "none";
            }
        });
    }

    function showSelectedSlide(index) {
        const selectedSlideContainer = document.querySelector(".secondaryblock__selected-block");
        const selectedSlide = selectedSlideContainer.querySelector(".slide");
        const selectedSlideImage = selectedSlide.querySelector("img");
        const selectedSlideText = selectedSlide.querySelector(".slide-text");
        const currentSlide = slides[index];
        const currentImage = currentSlide.querySelector("img");
        const currentText = currentSlide.querySelector(".slide-text");

        selectedSlideImage.src = currentImage.src;
        selectedSlideText.textContent = currentText.textContent;
    }

    function nextSlide() {
        const previousIndex = currentIndex;
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
        showSelectedSlide(previousIndex);
    }

    slides.forEach((slide, i) => {
        slide.addEventListener("click", function () {
            const previousIndex = currentIndex;
            currentIndex = (i + 1) % slides.length;
            showSlide(currentIndex);
            showSelectedSlide(previousIndex);
        });
    });

    showSlide(currentIndex);
    showSelectedSlide(0); 
    setInterval(nextSlide, intervalTime);
});
