function fn1(){
    return function(){
        const v1 = 10;
        console.log(v1);
    }
}
const fn2 = fn1();
fn2();