import { PRODUCT_API_LINK } from "../global/vendor.js";
import { getData } from "../global/api.js";


const storeProducts = async (productId) => {
    const products = await getData(`${PRODUCT_API_LINK}${productId}`);
    return products;
  };

  export default storeProducts;