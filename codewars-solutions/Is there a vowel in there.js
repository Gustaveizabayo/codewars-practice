function isVow(a) {
  const vowelCodes = {
    97: 'a',  // 'a'
    101: 'e', // 'e'
    105: 'i', // 'i'
    111: 'o', // 'o'
    117: 'u'  // 'u'
  };

  return a.map(num => {
    // Check if the number is a key in our vowelCodes object
    if (vowelCodes.hasOwnProperty(num)) {
      return vowelCodes[num]; // If it is, return the vowel string
    } else {
      return num; // Otherwise, return the original number
    }
  });
}