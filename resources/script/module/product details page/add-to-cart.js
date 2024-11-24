
const productQuantity = () => {
    const count = document.getElementById('counter-display');
    return count;
};

const storeIdAndQuantity = (productId) => {
    const id = productId;
    const count = productQuantity();
    localStorage.setItem(`productDetail-${productId}`, JSON.stringify({id, quantity: count.value}));
  };

  export default storeIdAndQuantity;