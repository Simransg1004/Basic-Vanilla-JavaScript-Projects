const sliderImages = document.querySelectorAll('.slide-in');
// console.log(sliderImages);

// function debounce to controll the logs of scroll event
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };


function checkSlide(e) {
    // console.log(e);

    sliderImages.forEach(sliderImage => {
        // Halfway through the image
        const slideInAt = (window.scrollY + window.innerHeight) - (sliderImage.height/2);
        // console.log(slideInAt);
        
        // Bottom of the image
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        // console.log(imageBottom);

        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if(isHalfShown && isNotScrolledPast) {
            sliderImage.classList.add('active');
        } 
        else {
            sliderImage.classList.remove('active');
        }
    })
}

window.addEventListener('scroll', debounce(checkSlide, 500));