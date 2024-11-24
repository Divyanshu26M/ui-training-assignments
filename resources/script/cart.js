
import updateCartUI from './module/cart/display-cart.js';
import checkCouponCode from './module/cart/accordian-couponcode.js';
import checkGiftCard from './module/cart/accordian-giftcard.js';
import checkPinCode from './module/cart/accordian-pincode.js';
import accordianToggle from './module/cart/accordian.js';
import { updateTotalPrice, taxAndTotal } from './module/cart/cart-amount.js';
import { updateCartDetails } from './module/cart/discount.js';
import toggleLikeInCart from './module/cart/toggle-like.js';
import { toggleCartEditMenu, CART_ELEMENT } from './module/cart/toggle-edit-menu.js';
import deleteCart from './module/cart/delete-cart.js';
import isCartEmpty from './module/cart/cart-product-status.js';

// Find a product element in the cart by its ID
const getProductById = (id) => {
  const cartProductElements = CART_ELEMENT.querySelectorAll('.cartProducts');
  return Array.from(cartProductElements).find((el) => el.id === id);
};

// Update the displayed price of a product based on its quantity
const updateProductPrice = (productDiv, quantity) => {
  const priceElement = productDiv.querySelector('.cart__productDetails_price');
  const pricePerUnit = parseFloat(priceElement.getAttribute('data-price-per-unit'));
  const newTotalPrice = pricePerUnit * quantity;
  priceElement.innerHTML = `&dollar;${newTotalPrice.toFixed(2)}`;
};

// Handle the update of a product's quantity in the cart
const handleQuantityUpdate = (productId, change) => {
  const productDiv = getProductById(productId);
  if (productDiv) {
    const quantityInputElement = productDiv.querySelector('.counter-display');
    let currentQuantity = parseInt(quantityInputElement.value, 10);
    currentQuantity = Math.max(0, currentQuantity + change); // Ensure quantity does not drop below 0
    quantityInputElement.value = currentQuantity;
    updateProductPrice(productDiv, currentQuantity);
    updateTotalPrice();
    updateCartDetails();
  }
};

// Set up event listeners for accordion buttons
const setupAccordianListeners = () => {
  const accordianButtonElements = document.querySelectorAll('.cart-accordian__item__button');
  accordianButtonElements.forEach((button, index) => {
    button.addEventListener('click', () => accordianToggle(index));
  });
};

// Set up event listeners for the check buttons for pincode, coupon code, and gift card
const setupCheckButtonListeners = () => {
  const checkPinCodeButtonElement = document.getElementById('checkPinCode-btn');
  const checkCouponButtonElement = document.getElementById('checkCoupon-btn');
  const checkGiftCardButtonElement = document.getElementById('checkGiftCard-btn');

  if (checkPinCodeButtonElement) {
    checkPinCodeButtonElement.addEventListener('click', () => {
      checkPinCode();
      taxAndTotal();
      updateCartDetails();
    });
  }
  if (checkCouponButtonElement) {
    checkCouponButtonElement.addEventListener('click', () => {
      checkCouponCode();
      taxAndTotal();
      updateCartDetails();
    });
  }
  if (checkGiftCardButtonElement) {
    checkGiftCardButtonElement.addEventListener('click', () => {
      checkGiftCard();
      taxAndTotal();
      updateCartDetails();
    });
  }
};

// Set up event listeners for quantity update buttons within the cart
const setupQuantityListeners = () => {
  CART_ELEMENT.addEventListener('click', (event) => {
    const clickedButton = event.target.closest('button');
    if (!clickedButton) return;

    const productDiv = clickedButton.closest('.cartProducts');
    if (!productDiv) return;

    const productId = productDiv.id;
    if (!productId) return;

    const isIncreaseButton = clickedButton.classList.contains('increaseAndUpdate-quantity');
    const isDecreaseButton = clickedButton.classList.contains('reduceAndUpdate-quantity');

    if (isIncreaseButton) {
      handleQuantityUpdate(productId, 1);
    } else if (isDecreaseButton) {
      handleQuantityUpdate(productId, -1);
    }
  });
};

// Set up event listeners for the delete product button
const setupDeleteProductListener = () => {
  CART_ELEMENT.addEventListener('click', async (event) => {
    const clickedButton = event.target.closest('button');
    if (!clickedButton) return;

    const productDiv = clickedButton.closest('.cartProducts');
    if (!productDiv) return;

    const productId = productDiv.id;
    if (!productId) return;

    const isDeleteButton = clickedButton.classList.contains('cart__edit__Remove');

    if (isDeleteButton) {
      deleteCart(productId); 
      updateTotalPrice();
      updateCartDetails();
      isCartEmpty();
    }
  });
};

// Set up event listeners
const setupEventListeners = () => {
  setupAccordianListeners();
  setupCheckButtonListeners();
  setupQuantityListeners();
  setupDeleteProductListener();
};

// Initialize the cart view and set up event listeners after the DOM content is loaded
document.addEventListener('DOMContentLoaded', async () => {
  updateCartUI(CART_ELEMENT);
  setupEventListeners();
  updateTotalPrice();
  updateCartDetails();
});



// Set up a MutationObserver to monitor changes in the cart element and update totals accordingly
const setupMutationObserver = () => {
  const observer = new MutationObserver(() => {
    updateTotalPrice();
    taxAndTotal();
    updateCartDetails();
    isCartEmpty();
  });

  observer.observe(CART_ELEMENT, { childList: true, subtree: true });
};

document.addEventListener('DOMContentLoaded', setupMutationObserver);

document.addEventListener('click', (event) => {
  const clickedButton = event.target.closest('.cart__edit__SaveForLater');
  if (clickedButton) {
    toggleLikeInCart(clickedButton);
  }
});

document.addEventListener('click', () => {
  CART_ELEMENT.addEventListener('click', toggleCartEditMenu);
});
