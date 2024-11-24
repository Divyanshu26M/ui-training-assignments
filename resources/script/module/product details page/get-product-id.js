import { retrieveInLocalStorage } from '../global/store-and-retrive.js';

const retrieveProductId = () => {
  const id = retrieveInLocalStorage('productId');
  if (id === null) {
    console.warn('Product ID not found in session storage.');
  }
  return id;
};

export default retrieveProductId;
