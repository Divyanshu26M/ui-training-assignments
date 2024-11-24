import getCartProducts from './get-cart-products.js';
import cartHTML from './cart-HTML.js';
import totalProductPrice from './product-total-price.js';
import { storeCart } from './fetch-cart.js';



const displayCart = async (cartElement) => {
  try {
    const cartProducts = await getCartProducts();
    const cart = await storeCart();
    const CART_ELEMENT = cartElement;

    // Clear existing cart content
    CART_ELEMENT.innerHTML = '';

    // Render each product in the cart
    cartProducts.forEach((cartProduct) => {
      cartHTML(cart, cartProduct, totalProductPrice);
    });
  } catch (error) {
    console.error('Error updating UI:', error);
  }
};

export default displayCart;


