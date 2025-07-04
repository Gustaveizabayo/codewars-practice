function nbDig(n, d) {
    let count =0;
    for (let i =0; i <= n; i++) {
        
        let square = (i * i).toString();
        for(let char of square) {
            if(char === d.string()) {
                count++;
            }
        }
    }
}
return count;