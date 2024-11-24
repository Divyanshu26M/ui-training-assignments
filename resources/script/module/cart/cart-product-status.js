import { CART_ELEMENT } from "./toggle-edit-menu.js";

const isCartEmpty = () => {
    if (CART_ELEMENT.children.length < 1) {
      CART_ELEMENT.innerHTML = '<div class="cart__empty">Cart is Empty.</div>';
    }
  };

  export default isCartEmpty;