const ACCORDIAN_BUTTON_ELEMENTS = document.querySelectorAll('.cart-accordian__item__button');
const ACCORDIAN_CONTENT_ELEMENTS = document.querySelectorAll('.cart-accordian__item__content');

function accordianToggle(accordianIndex) {
  
  const contentElement = ACCORDIAN_CONTENT_ELEMENTS[accordianIndex];
  const buttonElement = ACCORDIAN_BUTTON_ELEMENTS[accordianIndex];

  if (contentElement) {
    const accordianStatus = contentElement.getAttribute('data-accordian');
    const isExpanded = buttonElement.getAttribute('aria-expanded') === 'true';

    if (accordianStatus === 'disable') {
      // Close all other accordions
      ACCORDIAN_CONTENT_ELEMENTS.forEach((el, index) => {
        el.setAttribute('data-accordian', 'disable');
        ACCORDIAN_BUTTON_ELEMENTS[index].setAttribute('aria-expanded', 'false');
        el.classList.remove('accordian-active');
      });

      // Open the clicked accordion
      contentElement.setAttribute('data-accordian', 'enable');
      buttonElement.setAttribute('aria-expanded', 'true');
      contentElement.classList.add('accordian-active');
    } else if (isExpanded) {
      // Close the clicked accordion if it's already open
      contentElement.setAttribute('data-accordian', 'disable');
      buttonElement.setAttribute('aria-expanded', 'false');
      contentElement.classList.remove('accordian-active');
    }
  }
}


export default accordianToggle;
