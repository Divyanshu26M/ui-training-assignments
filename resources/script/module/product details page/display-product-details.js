function updateProductImages(imageElements, imageUrl) {
    imageElements.forEach((image) => {
        image.src = imageUrl;
    });
}

function updateProductTitles(titleElements, titleText) {
    titleElements.forEach((title) => {
        title.textContent = titleText;
    });
}

function updateProductPrice(priceElement, price) {
    priceElement.innerHTML = `&dollar;${price}`;
}

function updateProductDescription(descriptionElements, descriptionText) {
    descriptionElements.forEach((element) => {
    element.textContent = descriptionText;
    });
}

function productRatingHtml(rating) {
    const productRating = Math.floor(rating);
    const totalStars = 5;
    let starsHtml = '';
    
    for (let i = 0; i < productRating; i += 1) {
        starsHtml += `<img src="./resources/img/star-dark.svg" alt="">`;
    }
    for (let i = 0; i < (totalStars - productRating); i += 1) {
        starsHtml += `<img src="./resources/img/star.svg" alt="">`;
    }
    
    return starsHtml;
}

function updateProductRating(ratingElement, rating, count) {
    ratingElement.innerHTML = `${productRatingHtml(rating)  }<span> (${count}) </span>`;
}

const productDetailContent = (productDetailsData) => {
    const PRODUCT_IMAGE_ELEMENTS = document.querySelectorAll('.productImage');
    const PRODUCT_TITLE_ELEMENTS = document.querySelectorAll('.productTitle');
    const PRODUCT_PRICE_ELEMENT = document.getElementById('productPrice');
    const PRODUCT_DESCRIPTION_ELEMENTS = document.querySelectorAll('.productDescription');
    const PRODUCT_RATING_ELEMENT = document.getElementById('productRating');
    
    updateProductImages(PRODUCT_IMAGE_ELEMENTS, productDetailsData.image);
    updateProductTitles(PRODUCT_TITLE_ELEMENTS, productDetailsData.title);
    updateProductPrice(PRODUCT_PRICE_ELEMENT, productDetailsData.price);
    updateProductDescription(PRODUCT_DESCRIPTION_ELEMENTS, productDetailsData.description);
    updateProductRating(PRODUCT_RATING_ELEMENT, productDetailsData.rating.rate, productDetailsData.rating.count);
};

export default productDetailContent;
