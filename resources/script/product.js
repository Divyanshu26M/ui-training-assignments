import { MENU_Button_ELEMENT, menuToggle } from './module/global/menu.js';
import { toggleFilterMenuMobile } from './module/product page/filter-menu.js';
import storeCategories from './module/product page/fetch-categories.js';
import generateListElement from './module/product page/category-html.js';
import checkSelectedCategory from './module/product page/fetch-product.js';
import checkPathname from './module/product page/filter-checkbox-selector.js';
import renderProducts from './module/product page/display-products.js';
import generateProductHTML from './module/product page/product-card.js';
import displayTotalNumberOfProducts from './module/product page/show-result.js';
import toggleLike from './module/global/product-like.js';
import storeProductId from './module/product page/store-product-id.js';

// Navigation menu
MENU_Button_ELEMENT.addEventListener('click', menuToggle);

// Genrate Filter Menu
const generateCategoryList = async () => {
  try {
    const CATEGORY_LIST_ELEMENT = document.querySelectorAll(
      '.filter-menu-top__list',
    );
    if (!CATEGORY_LIST_ELEMENT) {
      alert('Category list element not found.');
      return;
    }
    const categories = await storeCategories();
    CATEGORY_LIST_ELEMENT.forEach((element) => {
      categories.forEach((category) => {
        const listElement = generateListElement(category);
        element.appendChild(listElement);
      });
    });
  } catch (error) {
    console.error('Error generating category list:', error);
  }
};

// Attach event listeners to filter buttons
const attachFilterButtonListeners = () => {
  const FILTER_Button_ELEMENT = document.querySelectorAll(
    '.filter-and-sort-btn',
  );
  FILTER_Button_ELEMENT.forEach((element) => {
    element.addEventListener('click', toggleFilterMenuMobile);
  });
};

// Display products on the category page
const displayProducts = async () => {
  try {
    const products = await renderProducts();
    const PRODUCT_CONTAINER_ELEMENT = document.querySelector('.products');
    if (PRODUCT_CONTAINER_ELEMENT) {
      PRODUCT_CONTAINER_ELEMENT.innerHTML = '';
      products.forEach((product) => {
        const productHTML = generateProductHTML(product);
        PRODUCT_CONTAINER_ELEMENT.appendChild(productHTML);
      });
    } else {
      console.error('Product container element not found.');
    }
  } catch (error) {
    console.error('Error displaying products:', error);
  }
};

// Add event listeners to all checkbox elements
const addCheckboxListeners = () => {
  const CHECKBOX_ELEMENTS = document.querySelectorAll('input[type="checkbox"]');
  CHECKBOX_ELEMENTS.forEach((element) => {
    element.addEventListener('click', () => {
      checkSelectedCategory();
      displayProducts();
      displayTotalNumberOfProducts();
    });
  });
};

// Initialize everything on DOMContentLoaded
document.addEventListener('DOMContentLoaded', async () => {
  await generateCategoryList();
  checkPathname();
  checkSelectedCategory();
  addCheckboxListeners();
  displayProducts();
  displayTotalNumberOfProducts();
  attachFilterButtonListeners();
});

// Toggle the like/heart icon image
document.addEventListener('click', (event) => {
  const clickedButton = event.target.closest('.like--btn');
  if (clickedButton) {
    toggleLike(clickedButton);
  }
});

document.querySelector('.products').addEventListener('click', (event) => {
  storeProductId(event);
});
