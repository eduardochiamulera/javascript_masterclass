const sum = function (a, b, c, ...numbers) {
    let total = a + b + c;
    console.log(numbers);
    for(let number of numbers){
        total += number ;
    }
    return total;
};

console.log(sum(1,2,3,4,5,6,7,8,9));