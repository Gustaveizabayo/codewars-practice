function oddest(a) {
  function oddness(n) {
    if (n === 0) return 0;
    if (n % 2 === 0) {
      return oddness(n / 2);
    } else {
      return oddness((n - 1) / 2) + 1;
    }
  }

  return a.reduce((maxNum, num) => 
    oddness(num) > oddness(maxNum) ? num : maxNum
  );
}