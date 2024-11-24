 const toggleLike = (clickedButton) => {
    const LIKE_IMAGE_ELEMENT = clickedButton.querySelector('.like--img');
  
    if (LIKE_IMAGE_ELEMENT.src.includes('heart.svg')) {
      LIKE_IMAGE_ELEMENT.src = './resources/img/heart-black.svg';
    } else {
      LIKE_IMAGE_ELEMENT.src = './resources/img/heart.svg';
    }
  };

  export default toggleLike;