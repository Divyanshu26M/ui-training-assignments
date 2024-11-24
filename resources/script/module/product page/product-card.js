
// CREATING IMAGE ELEMENT
const createImageElement = (imageUrl, altText) => {
    const image = document.createElement('img');
    image.src = imageUrl;
    image.alt = altText;
    image.width = 30;
    return image;
  };
  
  // CREATING ANCHOR TAG
  const createAnchorElement = (href, childElement) => {
    const anchor = document.createElement('a');
    anchor.href = href;
    anchor.classList.add('products__image');
    anchor.appendChild(childElement);
    return anchor;
  };
  const createTitleElement = (title) => {
    const titleElement = document.createElement('h3');
    titleElement.textContent = title;
    return titleElement;
  };
  
  // CREATING A CONTAINER FOR PRODUCTS DETAILS
  const createDetailsContainer = (title, price) => {
    const detailsContainer = document.createElement('div');
    detailsContainer.classList.add('products__details');
  
    const titleAnchor = createAnchorElement(
      'product-detail.html',
      createTitleElement(title),
    );
  
    const priceElement = document.createElement('p');
    priceElement.classList.add('regular-heading-m-16-');
    priceElement.textContent = `$${price}`;
  
    const likeButton = document.createElement('button');
    likeButton.classList.add('like--btn');
    const likeImage = document.createElement('img');
    likeImage.classList.add('like--img');
    likeImage.setAttribute('aria-label', 'Like button');
    likeImage.src = './resources/img/heart.svg';
    likeImage.alt = '';
    likeButton.appendChild(likeImage);
  
    detailsContainer.appendChild(titleAnchor);
    detailsContainer.appendChild(priceElement);
    detailsContainer.appendChild(likeButton);
  
    return detailsContainer;
  };
  
  const generateProductHTML = (product) => {
    const productContainer = document.createElement('div');
    productContainer.id=product.id;
    productContainer.classList.add('products__list');
  
    const imageElement = createImageElement(product.image, product.title);
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('products__image');
    imageContainer.appendChild(imageElement);
    const imageAnchor = createAnchorElement(
      'product-detail.html',
      imageContainer,
    );
  
    const detailsContainer = createDetailsContainer(product.title, product.price);
  
    productContainer.appendChild(imageAnchor);
    productContainer.appendChild(detailsContainer);
  
    return productContainer;
  };

  export default generateProductHTML;
  

  