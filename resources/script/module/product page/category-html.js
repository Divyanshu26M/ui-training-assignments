const generateInputElement = (content) => {
  const idAndValue = content.split("'")[0].trim(); 
  const width = window.innerWidth; 

  const INPUT_ELEMENT = document.createElement('input');
  INPUT_ELEMENT.type = 'checkbox';
 INPUT_ELEMENT.className=idAndValue;
  
  // Set the ID based on the screen width
  INPUT_ELEMENT.id = width < 768 ? `${idAndValue}-mobile` : `${idAndValue}-desktop`;
  
  INPUT_ELEMENT.value = idAndValue;
  return INPUT_ELEMENT;
};

const generateLabelElement = (content) => {
  const forAttribute = content.split("'")[0].trim(); 
  const width = window.innerWidth; 

  const LABEL_ELEMENT = document.createElement('label');
  // Set the 'for' attribute based on the screen width
  LABEL_ELEMENT.setAttribute('for', width < 768 ? `${forAttribute}-mobile` : `${forAttribute}-desktop`);
  
  LABEL_ELEMENT.textContent = content;
  return LABEL_ELEMENT;
};

const generateListElement = (content) => {
  const LIST_ELEMENT = document.createElement('li');
  const inputEl = generateInputElement(content);
  const labelEl = generateLabelElement(content);
  LIST_ELEMENT.appendChild(inputEl);
  LIST_ELEMENT.appendChild(labelEl);
  return LIST_ELEMENT;
};

export default generateListElement;
