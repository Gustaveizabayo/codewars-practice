function grow(x){
  return x.reduce((acc, currentValue) => acc * currentValue, 1);
}