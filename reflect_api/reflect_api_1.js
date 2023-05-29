function createArray(){
    return new Proxy({}, {
        set(target, key, value) {
            target.length = target.length || 0;
            target.length++;
            Reflect.set(target, key, value);
        },
        get(target, key){
            if(typeof key === "string" && key.match(/\d+/)){
                if(!(Reflect.has(target, key))){
                    throw `Property ${key} not found`;
                }
            }
            return Reflect.get(target, key);
        },
        deleteProperty: function(target, key){
            if(Reflect.has(target, key)){
                Reflect.deleteProperty(target, key);
                target.length--;
            }
        }
    });
}

const languages = createArray();
languages[0] = "Python";
languages[1] = "Ruby";
languages[2] = "JavaScript";
console.log(languages);
console.log(languages.length);
delete languages[1];
delete languages[2];
delete languages[3];
console.log(languages);
console.log(languages.length);
console.log(languages[0]);
console.log(languages[3]);