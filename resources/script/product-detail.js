import retrieveProductId from './module/product details page/get-product-id.js';
import storeProducts from './module/product details page/fetch-product.js';
import productDetailContent from './module/product details page/display-product-details.js';
import {
  increaseQuantity,
  decreaseQuantity,
  updateQuantity,
} from './module/global/counter.js';
import storeIdAndQuantity from './module/product details page/add-to-cart.js';
import toggleDescription from './module/product details page/product-detail-description.js';
import toggleLike from './module/global/product-like.js';

const INCREMENT_BUTTON_ELEMENT = document.getElementById('increase-quantity');
const DECREMENT_BUTTON_ELEMENT = document.getElementById('reduce-quantity');
const ADD_TO_CART_BUTTON_ELEMENT = document.getElementById('addToCart-btn');

// populate Product detail page
const populate = async () => {
  // Retrive the product Id from session storage and store it
  const productId = retrieveProductId();
  const productDetails = await storeProducts(productId);
  productDetailContent(productDetails);
};
populate().then((response) => response);

// create a carousel for product image
import('./module/product details page/product-carousel.js').then(
  ({ PRODUCT_IMAGE_DOT_NAV_ELEMENTS, productImageNav }) => {
    // Code related to carousel module
    PRODUCT_IMAGE_DOT_NAV_ELEMENTS.forEach((dot) => {
      dot.addEventListener('click', productImageNav);
    });
  },
);

// Decrement the counter and update the display
DECREMENT_BUTTON_ELEMENT.addEventListener('click', decreaseQuantity);
DECREMENT_BUTTON_ELEMENT.addEventListener('click', updateQuantity);

// Increment the counter and update the display
INCREMENT_BUTTON_ELEMENT.addEventListener('click', increaseQuantity);
INCREMENT_BUTTON_ELEMENT.addEventListener('click', updateQuantity);

// Store productId to create a cart later
ADD_TO_CART_BUTTON_ELEMENT.addEventListener('click', () => {
  const productId = retrieveProductId();
  storeIdAndQuantity(productId);
});

const SELECTED_IMAGE_ELEMENT = document.querySelector(
  '.topSection__productImages__selectedImage',
);

// Function to update the selected image
function updateSelectedImage(target) {
  const targetHTML = target.innerHTML;
  SELECTED_IMAGE_ELEMENT.innerHTML = targetHTML;
}

// Function to add the separator to the selected element and remove it from others
function handleSeparator(target) {
  const slidesElements = document.querySelectorAll(
    '.topSection__productImages__slides',
  );

  slidesElements.forEach((slide) => {
    const separatorDiv = slide.querySelector('.separator');

    if (slide === target) {
      // Add separator if it doesn't exist
      if (!separatorDiv) {
        const newSeparatorDiv = document.createElement('div');
        newSeparatorDiv.classList.add('separator');
        slide.appendChild(newSeparatorDiv);
      }
    } else if (separatorDiv) {
      separatorDiv.remove();
    }
  });
}

// Event listener for click events
document.addEventListener('click', (event) => {
  const target = event.target.closest('.topSection__productImages__slides');

  if (target) {
    updateSelectedImage(target);
    handleSeparator(target);
  }
});

//
document.addEventListener('DOMContentLoaded', async () => {
  const DESCRIPTION_CONTAINER_ELEMENT = document.querySelector(
    '.topSection__productDetails__description',
  );
  await toggleDescription();
  DESCRIPTION_CONTAINER_ELEMENT.addEventListener('click', async (event) => {
    event.preventDefault();
    await toggleDescription(event);
  });
});


// Toggle the like/heart icon image
document.addEventListener('click', (event) => {
    const clickedButton = event.target.closest('.like--btn');
    if (clickedButton) {
      toggleLike(clickedButton);
    }
  });
