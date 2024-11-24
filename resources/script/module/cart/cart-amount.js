import cartData from './cart-price-storage.js';

// Gets the price per unit for a given product ID
const getPricePerUnit = (productId) => {
  const cartProductElement = document.getElementById(productId);
  const productDetails = cartProductElement ? cartProductElement.querySelector('.cart__productDetails_price') : null;
  return productDetails
    ? parseFloat(productDetails.getAttribute('data-price-per-unit'))
    : 0;
};

// Updates the total price based on product quantities
const updateTotalPrice = () => {
  const quantityInputs = document.querySelectorAll('.counter-display');

  let totalPrice = 0;

  quantityInputs.forEach((input) => {
    const productId = input.closest('.cartProducts').id;
    const quantity = parseInt(input.value, 10);
    const pricePerUnit = getPricePerUnit(productId);
    if (!Number.isNaN(quantity) && quantity > 0 && pricePerUnit > 0) {
      totalPrice += pricePerUnit * quantity;
    }
  });

  const subtotalPriceElement = document.querySelector('#subtotal-price');
  if (subtotalPriceElement) {
    subtotalPriceElement.innerHTML = `${totalPrice.toFixed(2)}`;
  }

  cartData.subtotalPrice = totalPrice;
  return totalPrice;
};

// Calculates tax based on the subtotal price
const calculateTax = () => {
  const taxRate = 0.1;
  return cartData.subtotalPrice * taxRate;
};

// Calculates and returns the total cart amount
const totalCartAmount = () => {
  
  const total = cartData.subtotalPrice - cartData.coupon - cartData.giftcard + cartData.estimatedTax + cartData.estimatedShipping;
  return total;
};

// Updates the cartData object with estimated tax and total
const taxAndTotal = () => {
  cartData.estimatedTax = calculateTax(); 
  cartData.estimatedTotal = totalCartAmount(); 
};


// Export functions for external use
export { getPricePerUnit, updateTotalPrice, totalCartAmount, taxAndTotal };
