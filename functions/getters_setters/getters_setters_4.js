const rectangle = {
    set x(x) {
        if(x > 0){
            this._x = x;
        }
        else{
            console.log('Invalid value for X');
        }
    },
    set y(y) {
        if(y > 0) {
            this._y = y;
        }else{
            console.log('Invalid value for Y');
        }
    },
    get area(){
        return this._x * this._y;
    }
}
rectangle.x = -10;
rectangle.y = -2;
console.log(rectangle.area);