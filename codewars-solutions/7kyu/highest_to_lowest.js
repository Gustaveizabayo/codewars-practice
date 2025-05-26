function HighAndLow (number){
  const numbersArray = numbers.split(' ');
  const numericArray = mumbersArray.map(number);
  const maxNumber = Math.max (...numericArray);
  const minNumber = Math.min (... numericArray);
 return `${maxNumber} ${minNumber}`;
} 