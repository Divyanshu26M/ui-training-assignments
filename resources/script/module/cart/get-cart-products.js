import { storeCart, storeProducts } from './fetch-cart.js';

const getCartProducts = async () => {
  try {
    const cart = await storeCart();

    const cartProductsIds = cart.products.map((product) => product.productId);

    // Use Promise.all to fetch all product details in parallel
    const cartProductsDetails = await Promise.all(
      cartProductsIds.map(async (id) => storeProducts(id)),
    );
    return cartProductsDetails;
  } catch (error) {
    console.error('Error fetching cart products:', error);
    return [];
  }
};

export default getCartProducts;
