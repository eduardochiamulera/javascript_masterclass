function sum(a, b){
    return new Promise(function (resolve, reject){
        if(!a || !b) return reject("Invalid input")
        setTimeout(function() {
            console.log("resolve", resolve)
            resolve(a + b);
        }, 1000);
    })
}

sum().then(function(a){
    sum().then(function(b){
        sum().then(function(result){
            console.log(result);
        }).catch(function (e){
            console.log(e);
        })
    }).catch(function (e){
        console.log(e);
    })
}).catch(function (e){
    console.log(e);
});