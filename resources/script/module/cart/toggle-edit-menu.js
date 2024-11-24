const CART_ELEMENT = document.querySelector('.cart');

const toggleCartEditMenu = (event) => {
    const clickedElement = event.target.closest('.cart__edit__button');
    if (clickedElement) {
      const EDIT_NAV_ELEMENT = CART_ELEMENT.querySelector('nav');
      const isNavVisible =
        clickedElement.getAttribute('data-edit-nav-visible') === 'true';
      clickedElement.setAttribute(
        'data-edit-nav-visible',
        isNavVisible ? 'false' : 'true',
      );
      EDIT_NAV_ELEMENT.setAttribute(
        'aria-expanded',
        isNavVisible ? 'false' : 'true',
      );
    }
  };

  export  {toggleCartEditMenu, CART_ELEMENT};