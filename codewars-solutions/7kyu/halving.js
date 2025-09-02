function halvingSum(n) {
   let total = 0;
    while (n > 0) {
        total += n;
        n = Math.floor(n / 2);
    }
    return total;
    
}