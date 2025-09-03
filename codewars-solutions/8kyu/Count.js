function strCount(str, letter){  
  if (letter.length !== 1){
    throw new Error("Second arguement must be a single character.")
  }
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    }
  }
  return count;
}