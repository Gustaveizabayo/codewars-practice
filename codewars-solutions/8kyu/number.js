function getSum(a, b) {
  let sum = 0;
  let start = Math.min(a, b);
  let end = Math.max(a, b);

  for (let i = start; i <= end; i++) {
    sum += i;
  }

  return sum;
}
