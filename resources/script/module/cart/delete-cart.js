const deleteCart = (productId) => {
  const CART_PRODUCT_ELEMENT = document.getElementById(productId);

  if (CART_PRODUCT_ELEMENT) {
    CART_PRODUCT_ELEMENT.remove();
  } else {
    console.warn(`Element with ID ${productId} not found.`);
  }
};

export default deleteCart;
