import { checkFreeShipping } from './discount.js';

// Check for valid Gift card
const checkGiftCard = () => {
  const GIFT_CARD_MSG_ELEMENT = document.getElementById('giftCard-msg');
  const GIFT_CARD_ITEM_ELEMENT = document.getElementById('gift-card-el');
  const INPUT_GIFT_CARD_ELEMENT = document.getElementById('gift-card');
  const giftCard = INPUT_GIFT_CARD_ELEMENT.value;
  const whiteSpaceRegex = /^\s|\s$/; // Check for whitespace at the start or end
  let message = '';

  if (whiteSpaceRegex.test(giftCard) || giftCard === '') {
    message = 'Invalid Gift Card Code';
    GIFT_CARD_ITEM_ELEMENT.setAttribute('data-gift-card', 'not-applied');
  } else {
    message = 'Gift Card applied';
    GIFT_CARD_ITEM_ELEMENT.setAttribute('data-gift-card', 'applied');
  }

  GIFT_CARD_MSG_ELEMENT.textContent = message;
  checkFreeShipping();
};

export default checkGiftCard;
