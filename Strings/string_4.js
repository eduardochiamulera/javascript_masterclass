let counter = 0;
console.time("performance");
while(counter < 100000){
    //"JavaScript";
    new String("JavaScript");
    counter++;
}
console.timeEnd("performance");