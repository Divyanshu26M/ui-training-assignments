import { CART_API_LINK, PRODUCT_API_LINK } from '../global/vendor.js';
import { getData } from '../global/api.js';

const storeProducts = async (productId) => {
  const products = await getData(`${PRODUCT_API_LINK}${productId}`);
  return products;
};

const storeCart = async () => {
  const cart = await getData(CART_API_LINK);
  return cart;
};

export { storeCart, storeProducts };
