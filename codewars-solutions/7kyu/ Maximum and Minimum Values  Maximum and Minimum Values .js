var min = function(list){
  
    if (!list || list.length === 0) {
    return undefined; // Or throw an error: throw new Error("List is empty");
  }
  let minValue = list[0]; // Initialize with the first element
  for (let i = 1; i < list.length; i++) {
    if (list[i] < minValue) {
      minValue = list[i];
    }
  }
  return minValue;
}

function max(list) {
    if (!list || list.length === 0) {
        return undefined; // Or throw an error
    }
    let maxValue = list[0];
    for(let i = 1; i < list.length; i++){
        if(list[i] > maxValue){
            maxValue = list[i];
        }
    }
    return maxValue;
}