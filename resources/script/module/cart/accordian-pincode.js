// Check for valid pincode
const checkPinCode = () => {
  const PINCODE_MSG_ELEMENT = document.getElementById('pincode-msg');
  const PINCODE_ITEM_ELEMENT = document.getElementById('pincode-el');
  const INPUT_PINCODE_ELEMENT = document.getElementById('pincode');
  const pincode = INPUT_PINCODE_ELEMENT.value;
  const whiteSpaceRegex = /\s/;
  let message = '';
  if (
    whiteSpaceRegex.test(pincode) ||
    pincode.length > 6 ||
    pincode.length < 6
  ) {
    message = 'Invalid Pincode Code';
    PINCODE_MSG_ELEMENT.textContent = message;
    PINCODE_ITEM_ELEMENT.setAttribute('data-pincode', 'not-applied');

  } else {
    PINCODE_MSG_ELEMENT.textContent = `Shipping to ${pincode}`;
    PINCODE_ITEM_ELEMENT.setAttribute('data-pincode', 'applied');

  }
};

export default checkPinCode;
