function checkSelectedCategory() {
  const CATEGORY_LIST_ELEMENT = document.querySelector(
    '.filter-menu-top__list',
  );
  const checkedCategories = [];

  const CATEGORY_CHECK_BOX_ELEMENT = CATEGORY_LIST_ELEMENT.querySelectorAll(
    'input[type="checkbox"]',
  );

  CATEGORY_CHECK_BOX_ELEMENT.forEach((checkbox) => {
    if (!checkbox.checked) {
      return;
    }
    const checkboxValue = checkbox.value.split("'")[0].trim();
    checkedCategories.push(checkboxValue);
  });
  return checkedCategories;
}

export default checkSelectedCategory;
