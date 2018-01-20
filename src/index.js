odds = evens.map(v => v + 1)
pairs = evens.map(v => ({ even: v, odd: v + 1 }))
nums = evens.map((v, i) => v + i)

class Shape {
    constructor(id, x, y) {
        this.id = id
        this.move(x, y)
    }
    move(x, y) {
        this.x = x
        this.y = y
    }
}

class Rectangle extends Shape {
    constructor(id, x, y, width, height) {
        super(id, x, y)
        this.width = width
        this.height = height
    }
}
class Circle extends Shape {
    constructor(id, x, y, radius) {
        super(id, x, y)
        this.radius = radius
    }
}