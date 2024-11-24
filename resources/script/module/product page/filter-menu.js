const FILTER_Button_ELEMENT = document.querySelectorAll(".filter-and-sort-btn"); 

const toggleFilterMenuMobile = () => {
    const FILTER__CATEGORIES_ELEMENTS = document.querySelector('#filter-menu-mobile');
    if(FILTER__CATEGORIES_ELEMENTS.classList.contains('visibility--hidden')) {
        FILTER__CATEGORIES_ELEMENTS.classList.remove('visibility--hidden');
        FILTER__CATEGORIES_ELEMENTS.classList.add('menu-section__filter-menu--active');
        
    } else {
        FILTER__CATEGORIES_ELEMENTS.classList.add('visibility--hidden');
        FILTER__CATEGORIES_ELEMENTS.classList.remove('menu-section__filter-menu--active');
    }
};


export {FILTER_Button_ELEMENT, toggleFilterMenuMobile};