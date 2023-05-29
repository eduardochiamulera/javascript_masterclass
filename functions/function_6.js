const sum = function (a, b) {
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const calculator = function () {
    return function () {
        return "calculator";
    };
};

//console.log(sum(2,2));
//console.log(subtract(2,2));
console.log(calculator()());