const httpRequest = async (apiLink, configObject = {}) => {
  let response;
  let errorMsg;
  try {
    const request = await fetch(apiLink, configObject);
    response = await request.json();
  } catch (error) {
    errorMsg = `Something Went Wrong: ${error}`;
    Error(errorMsg);
    return errorMsg;
  }
  return response;
};

const getData = (apiLink) => httpRequest(apiLink);

const postData = (apiLink, bodyContent) => httpRequest(apiLink, {
    method: 'POST',
    body: JSON.stringify(bodyContent),
  });

const deleteData = (apiLink) => httpRequest(apiLink, { method: 'DELETE' });

export { getData, postData, deleteData };
