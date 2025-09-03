function mergeArrays(a, b) {
  let i = 0, j = 0;
  const result = [];

  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      if (result[result.length - 1] !== a[i]) {
        result.push(a[i]);
      }
      i++;
    } else if (a[i] > b[j]) {
      if (result[result.length - 1] !== b[j]) {
        result.push(b[j]);
      }
      j++;
    } else {
      if (result[result.length - 1] !== a[i]) {
        result.push(a[i]);
      }
      i++;
      j++;
    }
  }

 
  while (i < a.length) {
    if (result[result.length - 1] !== a[i]) {
      result.push(a[i]);
    }
    i++;
  }

  while (j < b.length) {
    if (result[result.length - 1] !== b[j]) {
      result.push(b[j]);
    }
    j++;
  }

  return result;
}
