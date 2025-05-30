function past(h, m, s) {
 
  const hoursInMs = h * 60 * 60 * 1000;

  const minutesInMs = m * 60 * 1000;


  const secondsInMs = s * 1000;

 
  return hoursInMs + minutesInMs + secondsInMs;
}