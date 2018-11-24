// All required variables
const carousel = document.querySelector('.carousel');
const inner = document.querySelector('.inner');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const bubbleContainer = document.querySelector('.bubbles');
const images = document.querySelectorAll('.inner img');
let bubbles = null;

// Creating a bubble for each image
for (let i = 0; i < images.length; i++) {
  let bubble = document.createElement('div');
  bubbleContainer.appendChild(bubble);
};

// Selecting all the bubbles and centering the bubbleContainer
bubbles = document.querySelectorAll('.bubbles div');
bubbleContainer.style.marginLeft = -(bubbleContainer.clientWidth / 2) + 'px';

window.addEventListener('load', () => {


  // initializing slideOffset and the current image's index
  let slideOffset = 0;
  let currentImageIndex = 0;

  // Setting the first bubble to active
  bubbles[currentImageIndex].style.opacity = 1;

  // Next button clicked
  next.addEventListener('click', () => { nextImage() });

  // Previous button clicked
  prev.addEventListener('click', () => { previousImage() });




  // -------- Helper functions ------ //
  const nextImage = () => {
    // Increasing the index
    currentImageIndex++;

    // If the last image's index is exceeded, set it to the current index to first image's index
    if (currentImageIndex > images.length - 1) {
      currentImageIndex = 0;
    };

    // Dynamically setting the bubbles as active and inactive
    if (bubbles[currentImageIndex - 1] === undefined) {
      bubbles[images.length - 1].style.opacity = 0.5;
    } else {
      bubbles[currentImageIndex - 1].style.opacity = 0.5;
    };
    bubbles[currentImageIndex].style.opacity = 1;

    // Showing the next image
    slideOffset = - window.innerWidth * currentImageIndex;
    inner.style.left = slideOffset + 'px';
  };

  const previousImage = () => {
    // Decreasing the index
    currentImageIndex--;

    // if there is no image before the first image, set the current index to the last image's index
    if (currentImageIndex < 0) {
      currentImageIndex = images.length - 1;
    };

    // Dynamically setting the bubbles active or inactive
    if (bubbles[currentImageIndex + 1] === undefined) {
      bubbles[0].style.opacity = 0.5;
    } else {
      bubbles[currentImageIndex + 1].style.opacity = 0.5;
    };
    bubbles[currentImageIndex].style.opacity = 1;

    // Showing the previous image
    slideOffset = - window.innerWidth * currentImageIndex;
    inner.style.left = slideOffset + 'px';
  };


  // Setting the slider to autoplay
  setInterval(() => {
    next.click();
  }, 4000);


});