const COUNTER_DISPLAY_ELEMENT = document.getElementById('counter-display');

let count = 0;


const decreaseQuantity = () => {
    if (count === 0) {
      return;
    }
    count -= 1;
    COUNTER_DISPLAY_ELEMENT.textContent = count;
  };
  
  // Increment count
  const increaseQuantity = () => {
    count += 1;
    COUNTER_DISPLAY_ELEMENT.textContent = count;
  };
  
  // Update count in Counter Display
  const updateQuantity = () => {
    COUNTER_DISPLAY_ELEMENT.value = count;
  };


  export {decreaseQuantity, increaseQuantity, updateQuantity};