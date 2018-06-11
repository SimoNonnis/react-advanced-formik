function getError(touched, errors) {
  return function returnError(key) {
    return touched[key] && errors[key];
  };
}

export default getError;
