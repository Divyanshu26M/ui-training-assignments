import * as apiLinks from '../global/vendor.js';
import { getData } from '../global/api.js';
import checkSelectedCategory from './fetch-product.js';

class CategoryApiLinks {
  constructor() {
      this.men =  apiLinks.MEN_PRODUCT_API_LINK;
      this.women =  apiLinks.WOMEN_PRODUCT_API_LINK;
      this.jewelery = apiLinks.JEWELERY_PRODUCT_API_LINK;
      this.electronics =  apiLinks.ELECTRONIC_PRODUCT_API_LINK;

  }

  getLink(category) { 
    const a = this[category] || null;
    return a; 
  }
}

const categoryApiLinks = new CategoryApiLinks();



const fetchProductsForCategory = async (category) => {
  const link = categoryApiLinks.getLink(category);
  if (!link) return [];

  try {
    const products = await getData(link);
    return products;
  } catch (error) {
    console.error(`Failed to fetch products for ${category}:`, error);
    return [];
  }
};

const renderProducts = async () => {
  const categoryList = checkSelectedCategory();

  const productPromises = categoryList.map(category => fetchProductsForCategory(category));

  const allProductsArray = await Promise.all(productPromises);

  // store all the products in a single array
  const allProducts = allProductsArray.flat();

  return allProducts;
};


export default renderProducts;
