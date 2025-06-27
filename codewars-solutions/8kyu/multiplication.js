

function multiTable(number) {
  let result = ''; 

  
  for (let i = 1; i <= 10; i++) {
    
    const product = number * i;

    
    
    result += `${i} * ${number} = ${product}`;

    
    if (i < 10) {
      result += '\n';
    }
  }

  return result; 
}