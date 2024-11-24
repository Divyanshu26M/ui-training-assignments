const PRODUCT_IMAGE_CONTAINER_ELEMENT = document.querySelector(
  '.topSection__productImages__container',
);
const PRODUCT_IMAGE_SLIDES_ELEMENTS = Array.from(
  PRODUCT_IMAGE_CONTAINER_ELEMENT.children,
);
const PRODUCT_IMAGE_NAV_ELEMENT = document.querySelector(
  '.topSection__productImages__nav',
);
const PRODUCT_IMAGE_DOT_NAV_ELEMENTS = Array.from(
  PRODUCT_IMAGE_NAV_ELEMENT.children,
);

// Get the width of a single slide
const productImageSlideWidth =
  PRODUCT_IMAGE_SLIDES_ELEMENTS[0].getBoundingClientRect().width;

// Arrange the slides next to one another
const setProductImageSlidePosition = (slide, index) => {
  const eachSlide = slide;
  const slideIndex = index;
  eachSlide.style.left = `${productImageSlideWidth * slideIndex}px`;
};

// Apply initial positions to all slides
PRODUCT_IMAGE_SLIDES_ELEMENTS.forEach(setProductImageSlidePosition);

// Move the carousel track to display the target slide
const moveToProductImageSlide = (trackElement, currentSlide, targetSlide) => {
  const track = trackElement;
  track.style.transform = `translateX(-${targetSlide.style.left})`;
  currentSlide.classList.remove('current-image');
  targetSlide.classList.add('current-image');
};
// Update the active dot indicators in the navigation
const updateProductImageDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-image');
    targetDot.classList.add('current-image');
};

// Move to the selected image when a navigation dot is clicked
const productImageNav = (event) => {
  const targetDot = event.target.closest('button');

  if (!targetDot) return;

  const CURRENT_SLIDE =
    PRODUCT_IMAGE_CONTAINER_ELEMENT.querySelector('.current-image');
  const CURRENT_DOT =
  PRODUCT_IMAGE_NAV_ELEMENT.querySelector('.current-image');

  const targetIndex = PRODUCT_IMAGE_DOT_NAV_ELEMENTS.findIndex(
    (dot) => dot === targetDot,
  );
  const targetSlide = PRODUCT_IMAGE_SLIDES_ELEMENTS[targetIndex];

  moveToProductImageSlide(
    PRODUCT_IMAGE_CONTAINER_ELEMENT,
    CURRENT_SLIDE,
    targetSlide,
  );
  updateProductImageDots(CURRENT_DOT, targetDot);
};

export { PRODUCT_IMAGE_DOT_NAV_ELEMENTS, productImageNav};
