const binaryArrayToNumber = arr => {
  return parseInt(arr.toString().replace(/[^0-9]/g, ''), 2);
};
