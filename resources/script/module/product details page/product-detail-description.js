import retrieveProductId from './get-product-id.js';
import storeProducts from './fetch-product.js';

// Function to retrieve the full description of the product
const fullDescription = async () => {
  const productId = retrieveProductId();
  const productDetails = await storeProducts(productId);
  const { description } = productDetails;
  return description;
};

// Function to retrieve a shortened description based on word count
const shortDescriptionFunction = async (maxWords) => {
  const description = await fullDescription();
  const wordsArray = description.split(' ');
  const shortDescription = wordsArray.slice(0, maxWords).join(' ').trim();
  return shortDescription;
};

// Function to update the description in the DOM
const updateDescription = async (descriptionFn) => {
  const DESCRIPTION_ELEMENT = document.querySelector('.productDescription');
  const productDescription = await descriptionFn();
  DESCRIPTION_ELEMENT.textContent = productDescription;
};

// Function to toggle between full and short descriptions
const toggleDescription = async () => {
  const DESCRIPTION_ELEMENT = document.querySelector('.productDescription');

  if (DESCRIPTION_ELEMENT.classList.contains('shortDescription')) {
    // Show the full description

    await updateDescription(fullDescription);
    DESCRIPTION_ELEMENT.classList.remove('shortDescription');
    DESCRIPTION_ELEMENT.classList.add('fullDescription');
    document.getElementById('contentToggle').textContent = 'Read More';
    
  } else {
    // Show the short description
    await updateDescription(() => shortDescriptionFunction(30));
    DESCRIPTION_ELEMENT.classList.remove('fullDescription');
    DESCRIPTION_ELEMENT.classList.add('shortDescription');
    document.getElementById('contentToggle').textContent = 'Read Less';

  }
};


export default toggleDescription;
