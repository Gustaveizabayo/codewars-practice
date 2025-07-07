
function calculatePolygon(length, width) {
  if (length === width) {
    
    return length * width;
  } else {
    
    return 2 * (length + width);
  }
}