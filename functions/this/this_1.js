const rectangle = {
    x: 10,
    y: 2,
    calculateArea: function() {
        console.log(this);
        return this.x * this.y;
    }
}

console.log(rectangle.calculateArea());