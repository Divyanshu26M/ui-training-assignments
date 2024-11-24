const storeInLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};
const retrieveInLocalStorage = (key) => {
  const retrivedValue = localStorage.getItem(key);
  return retrivedValue;
};

export { storeInLocalStorage, retrieveInLocalStorage };
