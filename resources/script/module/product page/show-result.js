/* eslint-disable no-alert */
import renderProducts from "./display-products.js";

const RESULTS_BUTTONS_ELEMENTS = document.querySelectorAll('.total-results');

const updateMobileResultsText = (productListLength) => {
    const RESULTS_BUTTONS_MOBILE_ELEMENT = document.getElementById('total-results-mobile');

    if (RESULTS_BUTTONS_MOBILE_ELEMENT) {
        RESULTS_BUTTONS_MOBILE_ELEMENT.textContent = `See ${productListLength} Results`;
    }
};

const displayTotalNumberOfProducts = async () => {
    try {
        const productListLength = (await renderProducts()).length;

        RESULTS_BUTTONS_ELEMENTS.forEach(resultBtn => {
            const btnText = `${productListLength} Results`;
            // eslint-disable-next-line no-param-reassign
            resultBtn.textContent = btnText;
        });

        updateMobileResultsText(productListLength);

    } catch (error) {
        alert("Failed to display the total number of products:", error);
    }
};

export default displayTotalNumberOfProducts;
