const MENU_Button_ELEMENT = document.getElementById("menu--btn"); 
const NAV_ELEMENT = document.getElementById("navigation"); 


// Toggle the visibility of the navigation menu
const menuToggle = () => {
    
    const visibility = NAV_ELEMENT.getAttribute('data-visible');
    
    // Accessing the menu button icon element within the menu button
    const MENU_ICON = MENU_Button_ELEMENT.childNodes[1];
    
    // Toggle visibility and update menu button icon, and accessibility attributes accordingly
    if (visibility === 'false') {
        NAV_ELEMENT.setAttribute('data-visible', true);
        MENU_Button_ELEMENT.setAttribute('aria-expanded', true);
        MENU_ICON.src = "resources/img/x.svg"; 
    } else {
        NAV_ELEMENT.setAttribute('data-visible', false);
        MENU_Button_ELEMENT.setAttribute('aria-expanded', false);
        MENU_ICON.src = "resources/img/menu.svg"; 
    }
};



export { MENU_Button_ELEMENT, menuToggle };
