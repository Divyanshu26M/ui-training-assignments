import { storeInLocalStorage } from '../global/store-and-retrive.js';

const getProductId = (targetContainer) =>
  targetContainer ? targetContainer.id : undefined;

const storeProductId = (event) => {
  const targetContainer = event.target.closest('.products__list');
  const id = getProductId(targetContainer);
  storeInLocalStorage('productId', id);
};

export default storeProductId;
