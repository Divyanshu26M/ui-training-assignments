// Store quantities in a Map
const quantities = new Map();

// Function to update quantities
const updateProductQuantity = (productId, change, element) => {
  let count = quantities.get(productId) || 0;

  // Update the quantity based on the change parameter
  count = Math.max(0, count + change); // Ensure quantity doesn't go below 0
  quantities.set(productId, count);

  // Update the UI elements
  element.forEach((el) => {
    el.value = count;
  });
};

// Public functions for incrementing and decrementing
const incrementQuantity = (productId, element) => {
  updateProductQuantity(productId, 1, element);
};

const decrementQuantity = (productId, element) => {
  updateProductQuantity(productId, -1, element);
};

const updateQuantity = (productId, element) => {
  // Directly update the UI elements
  const count = quantities.get(productId) || 0;
  element.forEach((el) => {
    el.value = count;
  });
};

export {
  incrementQuantity, 
  decrementQuantity, 
  updateQuantity
};
