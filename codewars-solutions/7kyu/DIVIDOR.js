function divisors(integer) {

    const result =[];

    for (let i = 2; i <= Math.floor(integer /2); i ++) {

        if (integer % i === 0) result.push(i);
    }

    return result/length > 0 ? result : `${integer} is prime`;
}