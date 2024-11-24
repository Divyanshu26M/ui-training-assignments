
const toggleLikeInCart = (clickedButton) => {
    const CART_LIKE_IMAGE_ELEMENT = clickedButton.querySelector('img');
    const newSrc = CART_LIKE_IMAGE_ELEMENT.src.includes('heart.svg')
      ? './resources/img/heart-black.svg'
      : './resources/img/heart.svg';
  
    CART_LIKE_IMAGE_ELEMENT.setAttribute('src', newSrc);
  };

  export default toggleLikeInCart;