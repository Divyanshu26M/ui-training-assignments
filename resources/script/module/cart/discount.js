import cartData from './cart-price-storage.js';
import { taxAndTotal } from './cart-amount.js';
import { CART_ELEMENT } from './toggle-edit-menu.js';

const checkAppliedStatus = (
  id,
  attribute,
  element,
  key,
  discount,
  subtotalPrice,
) => {
  const ACCORDION_ITEM_ELEMENT = document.getElementById(id);
  if (!ACCORDION_ITEM_ELEMENT) return;

  const isApplied = ACCORDION_ITEM_ELEMENT.getAttribute(attribute);
  if (isApplied !== 'applied') {
    element.textContent = '0';
    cartData[key] = 0;
    return;
  }
  const discountPrice = (discount / 100) * subtotalPrice;
  cartData[key] = discountPrice;
  element.textContent = discountPrice.toFixed(2);
};

const couponDiscount = () => {
  const COUPON_ELEMENT = document.getElementById('coupon-price');
  const GIFT_CARD_ELEMENT = document.getElementById('gift-price');
  const SUBTOTAL_PRICE_ELEMENT = document.getElementById('subtotal-price');

  if (!SUBTOTAL_PRICE_ELEMENT || !COUPON_ELEMENT || !GIFT_CARD_ELEMENT) return;

  const subtotalPrice = parseFloat(SUBTOTAL_PRICE_ELEMENT.textContent);

  if (Number.isNaN(subtotalPrice)) return;

  cartData.subtotalPrice = subtotalPrice;

  checkAppliedStatus(
    'coupon-code',
    'data-coupon-code',
    COUPON_ELEMENT,
    'coupon',
    10,
    cartData.subtotalPrice,
  );

  checkAppliedStatus(
    'gift-card-el',
    'data-gift-card',
    GIFT_CARD_ELEMENT,
    'giftcard',
    5,
    cartData.subtotalPrice,
  );
};

const checkFreeShipping = () => {
  const ESTIMATED_SHIPPING_ELEMENT =
    document.getElementById('estimated-shipping');
  const PINCODE_ELEMENT = document.getElementById('pincode-el');

  if (!ESTIMATED_SHIPPING_ELEMENT || !PINCODE_ELEMENT) return;

  const isPincodeApplied =
    PINCODE_ELEMENT.getAttribute('data-pincode') === 'applied';
  const hasEmptyCartClass = Array.from(CART_ELEMENT.children).some((child) =>
    child.classList.contains('cart__empty'),
  );


  if (isPincodeApplied) {
    cartData.estimatedShipping = 0;
    ESTIMATED_SHIPPING_ELEMENT.textContent = 'FREE';
  } else if (hasEmptyCartClass) {
    cartData.estimatedShipping = 0;
    ESTIMATED_SHIPPING_ELEMENT.textContent = '0';
  } else {
    cartData.estimatedShipping = 10;
    ESTIMATED_SHIPPING_ELEMENT.textContent = '10';
  }
};

const taxAmount = () => {
  const ESTIMATED_TAX_ELEMENT = document.getElementById('estimated-tax');
  if (ESTIMATED_TAX_ELEMENT) {
    ESTIMATED_TAX_ELEMENT.textContent = Number(cartData.estimatedTax).toFixed(
      2,
    );
  }
};

const totalCartAmount = () => {
  const ESTIMATED_TOTAL_ELEMENT = document.getElementById('estimated-total');
  if (ESTIMATED_TOTAL_ELEMENT) {
    ESTIMATED_TOTAL_ELEMENT.textContent = Number(
      cartData.estimatedTotal,
    ).toFixed(2);
  }
};

// Function to update all cart financial details
const updateCartDetails = () => {
  couponDiscount();
  checkFreeShipping();
  taxAndTotal();
  taxAmount();
  totalCartAmount();
};

export { updateCartDetails, checkFreeShipping, couponDiscount };
