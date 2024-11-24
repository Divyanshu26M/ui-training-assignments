// eslint-disable-next-line no-restricted-globals
const URL_PATHNAME = location.pathname;

const pathNameAndClassname = {
  men: 'men',
  women: 'women',
  electronics: 'electronics',
  jewelery: 'jewelery',
};

const checkElement = (elementClassName) => {
  const ELEMENT = document.querySelector(`.${elementClassName}`);

  if (ELEMENT) {
    ELEMENT.checked = true;
  } else {
    console.warn(`Element with class '${elementClassName}' not found.`);
  }
};

// Loop over the pathNameAndClassname object and assign the classname according to the document path
const checkPathname = () => {
  if (URL_PATHNAME === '/men-outerwear.html') {
    checkElement(pathNameAndClassname.men);
  }

  if (URL_PATHNAME === '/women-clothing.html') {
    checkElement(pathNameAndClassname.women);
  }

  if (URL_PATHNAME === '/jewelery.html') {
    checkElement(pathNameAndClassname.jewelery);
  }

  if (URL_PATHNAME === '/electronics.html') {
    checkElement(pathNameAndClassname.electronics);
  }
};

export default checkPathname;
