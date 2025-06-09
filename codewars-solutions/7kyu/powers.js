function largestPower(n){
  let k = 0;
  
  while (Math.pow(3,k) < n){
    k++;
  }
  return k - 1;
}