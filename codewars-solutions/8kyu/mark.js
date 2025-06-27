function getAverage(marks){
  if(!marks.length) return 0;
  const sum = marks.reduce((acc, val) => acc  + val, 0);
  return Math.floor(sum / marks.length);
 }