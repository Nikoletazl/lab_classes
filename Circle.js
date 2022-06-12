class Circle {
    constructor(radius) {
        this.radius = radius
        this.diameter = radius * 2
    }
}

const c = new Circle(5)

console.log(c.diameter)