function  XO(str) {
  const lowerStr = str.toLowerCase();
  const Xcount = (lowerStr.match(/x/g) || []).length;
  const Ocount = (lowerStr.match(/o/g) || []).length;
  return Xcount === Ocount;
}