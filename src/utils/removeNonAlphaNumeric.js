export const removeNonAlphaNumeric = (str) => {
  return str.replace(/[^\w\s]/gi, "");
};
