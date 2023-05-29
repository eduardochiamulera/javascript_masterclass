function* forever(){
    let value = 1;
    while(true){
        console.log(value++);
        yield;
    }
}

function today(){
    const date = new Date();
    console.log(date);
}

const foreverGenerator = forever();
console.log(foreverGenerator.next());
console.log(foreverGenerator.next());
today();
console.log(foreverGenerator.next());
console.log(foreverGenerator.next());