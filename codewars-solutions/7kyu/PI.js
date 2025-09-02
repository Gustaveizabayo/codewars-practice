function squarePi(digits) {
  const piDigits = "31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679";
  
  let sum = 0;
  for (let i = 0; i < digits; i++) {
    let d = parseInt(piDigits[i], 10);
    sum += d * d;
  }

  let n = 0;
  while (n * n < sum) {
    n++;
  }
  return n;
}
