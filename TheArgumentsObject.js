function sumAll() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++)
    { total += arguments[i];
    }
    return total;
}
console.log(sumAll(8, 4, 3, 2)); // 17
console.log(sumAll(2, 3)); // 5