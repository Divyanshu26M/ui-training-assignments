const TRACK_ELEMENT = document.querySelector('.carousel__track');
const SLIDES_ELEMENT = Array.from(TRACK_ELEMENT.children);
const NEXT_BTN_ELEMENT = document.querySelector('.carousel__button--right');
const PREV_BTN_ELEMENT = document.querySelector('.carousel__button--left');
const CAROUSEL_NAV_ELEMENT = document.querySelector('.carousel__nav');
const DOT_NAV_ELEMENT = Array.from(CAROUSEL_NAV_ELEMENT.children);



// Get the width of a single slide
const slideWidth = SLIDES_ELEMENT[0].getBoundingClientRect().width;

// Arrange the slides next to one another
const setSlidePosition = (slide, index) => {
  const eachSlide = slide;
  const slideIndex = index;
  eachSlide.style.left = `${slideWidth * slideIndex}px`;
};

// Apply initial positions to all slides
SLIDES_ELEMENT.forEach(setSlidePosition);

// Move the carousel track to display the target slide
const moveToSlide = (trackElement, currentSlide, targetSlide) => {
  const track = trackElement;
  track.style.transform = `translateX(-${targetSlide.style.left})`;
  currentSlide.classList.remove('carousel__slide--current');
  targetSlide.classList.add('carousel__slide--current');
};

// Update the active dot indicators in the navigation
const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove('carousel__slide--current');
  targetDot.classList.add('carousel__slide--current');
};

// Show or hide navigation arrows based on the current slide
const hideShowArrow = (slideElements, prevBtn, nextBtn, targetIndex) => {
  const slide = slideElements;
  const prevButton = prevBtn;
  const nextButton = nextBtn;

  if (targetIndex === 0) {
    prevButton.classList.add('carousel__button--hidden');
    nextButton.classList.remove('carousel__button--hidden');
  } else if (targetIndex === slide.length - 1) {
    prevButton.classList.remove('carousel__button--hidden');
    nextButton.classList.add('carousel__button--hidden');
  } else {
    prevButton.classList.remove('carousel__button--hidden');
    nextButton.classList.remove('carousel__button--hidden');
  }
};

// Move to the previous slide when the left arrow is clicked
const showPrevImage = () => {
  const CURRENT_SLIDE = TRACK_ELEMENT.querySelector(
    '.carousel__slide--current',
  );
  const PREVIOUS_SLIDE = CURRENT_SLIDE.previousElementSibling;
  const CURRENT_DOT = CAROUSEL_NAV_ELEMENT.querySelector(
    '.carousel__slide--current',
  );
  const PREVIOUS_DOT = CURRENT_DOT.previousElementSibling;
  const prevIndex = SLIDES_ELEMENT.findIndex(
    (slide) => slide === PREVIOUS_SLIDE,
  );

  moveToSlide(TRACK_ELEMENT, CURRENT_SLIDE, PREVIOUS_SLIDE);
  updateDots(CURRENT_DOT, PREVIOUS_DOT);
  hideShowArrow(SLIDES_ELEMENT, PREV_BTN_ELEMENT, NEXT_BTN_ELEMENT, prevIndex);
};
PREV_BTN_ELEMENT.addEventListener('click', showPrevImage);

// Move to the next slide when the right arrow is clicked
const showNextImage = () => {
  const CURRENT_SLIDE = TRACK_ELEMENT.querySelector(
    '.carousel__slide--current',
  );
  const NEXT_SLIDE = CURRENT_SLIDE.nextElementSibling;
  const CURRENT_DOT = CAROUSEL_NAV_ELEMENT.querySelector(
    '.carousel__slide--current',
  );
  const NEXT_DOT = CURRENT_DOT.nextElementSibling;
  const nextIndex = SLIDES_ELEMENT.findIndex((slide) => slide === NEXT_SLIDE);

  moveToSlide(TRACK_ELEMENT, CURRENT_SLIDE, NEXT_SLIDE);
  updateDots(CURRENT_DOT, NEXT_DOT);

  hideShowArrow(SLIDES_ELEMENT, PREV_BTN_ELEMENT, NEXT_BTN_ELEMENT, nextIndex);
};
NEXT_BTN_ELEMENT.addEventListener('click', showNextImage);

// Move to the selected slide when a navigation dot is clicked
const carouselNav = (event) => {
  const targetDot = event.target.closest('button');

  if (!targetDot) return;

  const CURRENT_SLIDE = TRACK_ELEMENT.querySelector(
    '.carousel__slide--current',
  );
  const CURRENT_DOT = CAROUSEL_NAV_ELEMENT.querySelector(
    '.carousel__slide--current',
  );
  const targetIndex = DOT_NAV_ELEMENT.findIndex((dot) => dot === targetDot);
  const targetSlide = SLIDES_ELEMENT[targetIndex];

  moveToSlide(TRACK_ELEMENT, CURRENT_SLIDE, targetSlide);
  updateDots(CURRENT_DOT, targetDot);

  hideShowArrow(
    SLIDES_ELEMENT,
    PREV_BTN_ELEMENT,
    NEXT_BTN_ELEMENT,
    targetIndex,
  );
};


// Exporting elements and functions for external use
export {
  PREV_BTN_ELEMENT,
  NEXT_BTN_ELEMENT,
  CAROUSEL_NAV_ELEMENT,
  showPrevImage,
  showNextImage,
  carouselNav,
};
