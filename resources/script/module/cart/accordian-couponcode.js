// Check for valid Coupon code
const checkCouponCode = () => {
  const COUPON_MSG_ELEMENT = document.getElementById('coupon-msg');
  const COUPON_ITEM_ELEMENT = document.getElementById('coupon-code');
  const INPUT_COUPON_ELEMENT = document.getElementById('coupon');
  const coupon = INPUT_COUPON_ELEMENT.value;
  const whiteSpaceRegex = /^\s|\s$/; // Check for whitespace at the start or end
  let message = '';

  // Handle the case where there are white spaces or an empty string
  if (whiteSpaceRegex.test(coupon) || coupon === '') {
    message = 'Invalid Coupon Code';
    COUPON_MSG_ELEMENT.textContent = message;
    COUPON_ITEM_ELEMENT.setAttribute('data-coupon-code', 'not-applied');
  } else {
    message = '20% discount applied';
    COUPON_MSG_ELEMENT.textContent = message;
    COUPON_ITEM_ELEMENT.setAttribute('data-coupon-code', 'applied');
  }
};

export default checkCouponCode;
