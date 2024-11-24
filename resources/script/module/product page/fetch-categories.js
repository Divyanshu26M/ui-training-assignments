import { CATEGORY_API_LINK } from '../global/vendor.js';
import { getData } from '../global/api.js';



const storeCategories = async () => {
  const categories = await getData(CATEGORY_API_LINK);
  return categories;
};



// Display categories in the filter menu


export default storeCategories;
