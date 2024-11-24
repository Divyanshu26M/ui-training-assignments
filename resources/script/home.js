import * as carousel from './module/home/carousel.js';
import * as menu from './module/global/menu.js';

// Navigation menu
menu.MENU_Button_ELEMENT.addEventListener('click', menu.menuToggle);

// carousel 
carousel.PREV_BTN_ELEMENT.addEventListener('click', carousel.showPrevImage);
carousel.NEXT_BTN_ELEMENT.addEventListener('click', carousel.showNextImage);
carousel.CAROUSEL_NAV_ELEMENT.addEventListener('click', carousel.carouselNav);
