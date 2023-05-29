function sum(a ,b, callback){
    return new Promise(function(resolve){
        setTimeout(() => {
            resolve(a + b);
        }, 1000);
    })
}

function asyncR(gen, result){
    console.log("PRIMEIRO RESULT", result);
    const obj = gen.next(result);
    console.log("OBJ", obj);
    if(obj.done) return;
    obj.value.then(function (result){
        console.log("RESULT", result);
        asyncR(gen, result);
    })
    console.log(obj);
}

function async(fn){
    const gen = fn();
    asyncR(gen);
}

async(function* (){
    const a = yield sum(2,2);
    const b = yield sum(4,4);
    const result = yield sum(a,b);
    console.log(result);
});