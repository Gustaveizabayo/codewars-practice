function abbrevName(name) {
 
  const words = name.split(" ");

 
  const firstInitial = words[0][0].toUpperCase();

  const secondInitial = words[1][0].toUpperCase();

  return `${firstInitial}.${secondInitial}`;
}