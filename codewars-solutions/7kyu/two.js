function longest(s1, s2) {

  const combined = s1 + s2;

  
  const uniqueChars = new Set(combined);

  
  const arr = Array.from(uniqueChars);

  
  arr.sort();


  return arr.join('');
}
