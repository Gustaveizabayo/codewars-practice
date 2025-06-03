const binaryArrayToNumber = arr => {
  return arr.reduce((accumulator, currentBit) => {
    return (accumulator * 2) + currentBit;
  }, 0);
};
