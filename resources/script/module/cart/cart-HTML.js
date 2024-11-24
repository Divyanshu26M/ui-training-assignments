function createProductImage(cartProduct) {
  const productImageDiv = document.createElement('div');
  productImageDiv.classList.add('cart__productImage');

  const anchorTagForImage = document.createElement('a');
  anchorTagForImage.href = './product-detail.html';

  const productImage = document.createElement('img');
  productImage.src = cartProduct.image;
  productImage.alt = cartProduct.title;

  anchorTagForImage.appendChild(productImage);
  productImageDiv.appendChild(anchorTagForImage);

  return productImageDiv;
}

function createProductDetails(cartProduct, totalProductPriceFn, quantity) {
  const productDetailsDiv = document.createElement('div');
  productDetailsDiv.classList.add('cart__productDetails');

  const anchorTagForName = document.createElement('a');
  anchorTagForName.href = './product-detail.html';

  const productName = document.createElement('h3');
  productName.textContent = cartProduct.title;

  const size = document.createElement('div');
  size.textContent = 'Size: Medium';

  const color = document.createElement('div');
  color.textContent = 'Color: Storm';

  const price = document.createElement('div');
  price.classList.add('cart__productDetails_price');
  price.setAttribute('data-price-per-unit', cartProduct.price); // Store price per unit
  price.innerHTML = `&dollar;${totalProductPriceFn(cartProduct.price, quantity)}`;

  anchorTagForName.appendChild(productName);
  productDetailsDiv.appendChild(anchorTagForName);
  productDetailsDiv.appendChild(size);
  productDetailsDiv.appendChild(color);
  productDetailsDiv.appendChild(price);

  return productDetailsDiv;
}

function createCartEditMenu() {
  const cartEditDiv = document.createElement('div');
  cartEditDiv.classList.add('cart__edit');

  const editButton = document.createElement('button');
  editButton.classList.add('cart__edit__button');
  editButton.setAttribute('data-edit-nav-visible', 'false');
  editButton.setAttribute('aria-label', 'cart menu');

  const editIcon = document.createElement('img');
  editIcon.src = './resources/img/more-horizontal.svg';
  editIcon.alt = '';

  editButton.appendChild(editIcon);

  const editNav = document.createElement('nav');
  const editList = document.createElement('ul');

  const editItems = ['Edit item', 'Remove', 'Save For Later'];
  const editItemsImage = [
    './resources/img/edit-2.svg',
    './resources/img/trash-2.svg',
    './resources/img/heart.svg',
  ];

  editItems.forEach((itemText, editIndex) => {
    const editListItem = document.createElement('li');
    editListItem.classList.add('cart__edit-item');

    const editListItemButton = document.createElement('button');
    editListItemButton.classList.add(
      `cart__edit__${itemText.replace(/ /g, '')}`,
    );

    const editIcon2 = document.createElement('img');
    editIcon2.src = editItemsImage[editIndex];
    editIcon2.alt = '';

    editListItemButton.appendChild(editIcon2);
    editListItemButton.innerHTML += itemText;

    editListItem.appendChild(editListItemButton);
    editList.appendChild(editListItem);
  });

  editNav.appendChild(editList);
  cartEditDiv.appendChild(editButton);
  cartEditDiv.appendChild(editNav);

  return cartEditDiv;
}

function createProductQuantity(quantity) {
  const productQuantityDiv = document.createElement('div');
  productQuantityDiv.classList.add('cart__productQuantity');

  const productQuantityCounter = document.createElement('div');
  productQuantityCounter.classList.add('productQuantity-counter');

  const reduceButton = document.createElement('button');
  reduceButton.classList.add('reduceAndUpdate-quantity');

  const reduceIcon = document.createElement('img');
  reduceIcon.src = './resources/img/minus.svg';
  reduceIcon.alt = 'Reduce Product Quantity';

  reduceButton.appendChild(reduceIcon);

  const counterInput = document.createElement('input');
  counterInput.type = 'number';
  counterInput.classList.add('counter-display');
  counterInput.setAttribute('value', quantity);
  counterInput.setAttribute('aria-label', 'counter display');

  const increaseButton = document.createElement('button');
  increaseButton.classList.add('increaseAndUpdate-quantity');

  const increaseIcon = document.createElement('img');
  increaseIcon.src = './resources/img/plus.svg';
  increaseIcon.alt = 'Increase Product Quantity';

  increaseButton.appendChild(increaseIcon);

  productQuantityCounter.appendChild(reduceButton);
  productQuantityCounter.appendChild(counterInput);
  productQuantityCounter.appendChild(increaseButton);

  productQuantityDiv.appendChild(productQuantityCounter);

  return productQuantityDiv;
}

const CART_ELEMENT = document.querySelector('.cart');

const cartHTML = (cart, cartProduct, totalProductPriceFn) => {
  const cartProductsDiv = document.createElement('div');
  cartProductsDiv.classList.add('cartProducts');
  cartProductsDiv.id = cartProduct.id;

  const getProductQuantity = () => {
    // Find the product in the cart
    const foundProduct = cart.products.find(
      (product) => product.productId === cartProduct.id,
    );

    // Return quantity if found, otherwise default to 1
    const quantity = foundProduct ? foundProduct.quantity : 1;

    return quantity;
  };

  const quantity = getProductQuantity();

  const productImageDiv = createProductImage(cartProduct);
  const productDetailsDiv = createProductDetails(
    cartProduct,
    totalProductPriceFn,
    quantity,
  );
  const cartEditDiv = createCartEditMenu();
  const productQuantityDiv = createProductQuantity(quantity);

  cartProductsDiv.appendChild(productImageDiv);
  cartProductsDiv.appendChild(productDetailsDiv);
  cartProductsDiv.appendChild(cartEditDiv);
  cartProductsDiv.appendChild(productQuantityDiv);

  CART_ELEMENT.appendChild(cartProductsDiv);
};

export default cartHTML;
