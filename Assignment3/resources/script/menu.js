const MENU_Button_ELEMENT = document.getElementById("menu--btn"); 
const NAV_ELEMENT = document.getElementById("navigation"); 
const FILTER_Button_ELEMENT = document.querySelectorAll(".filter-and-sort-btn"); 

// Toggle the visibility of the navigation menu
const menuToggle = () => {
    // Get the current visibility state from the data-visible attribute
    const visibility = NAV_ELEMENT.getAttribute('data-visible');
    
    // Accessing the menu button icon element within the menu button
    const MENU_ICON = MENU_Button_ELEMENT.childNodes[1];
    
    // Toggle visibility and update menu button icon accordingly
    if (visibility === 'false') {
        NAV_ELEMENT.setAttribute('data-visible', true);
        MENU_Button_ELEMENT.setAttribute('aria-expanded', true);
        MENU_ICON.src = "./resources/images/x.svg"; 
    } else {
        NAV_ELEMENT.setAttribute('data-visible', false);
        MENU_Button_ELEMENT.setAttribute('aria-expanded', false);
        MENU_ICON.src = "./resources/images/menu.svg"; 
    }
};

const toogleFilterMenuMobile = () => {
    const FILTER__CATEGORIES_ELEMENTS = document.querySelector('.menu-section__filter-menu--mobile');
    if(FILTER__CATEGORIES_ELEMENTS.classList.contains('visibility--hidden')) {
        FILTER__CATEGORIES_ELEMENTS.classList.remove('visibility--hidden');
        FILTER__CATEGORIES_ELEMENTS.classList.add('menu-section__filter-menu--active');
    } else {
        FILTER__CATEGORIES_ELEMENTS.classList.add('visibility--hidden');
        FILTER__CATEGORIES_ELEMENTS.classList.remove('menu-section__filter-menu--active');
    }
};
FILTER_Button_ELEMENT.forEach((button) => {
    button.addEventListener("click", toogleFilterMenuMobile);
});

export { MENU_Button_ELEMENT, menuToggle };
