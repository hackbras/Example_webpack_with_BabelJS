class user {

}
odds = evens.map(v => v + 1)
pairs = evens.map(v => ({ even: v, odd: v + 1 }))
nums = evens.map((v, i) => v + i)

const PI = 3.141593
PI > 3.0


nums.forEach(v => {
    if (v % 5 === 0)
        fives.push(v)
})

this.nums.forEach((v) => {
    if (v % 5 === 0)
        this.fives.push(v)
})

function f(x, y = 7, z = 42) {
    return x + y + z
}
f(1) === 50


function f(x, y, ...a) {
    return (x + y) * a.length
}
f(1, 2, "hello", true, 7) === 9


var params = ["hello", true, 7]
var other = [1, 2, ...params] // [ 1, 2, "hello", true, 7 ]

function f(x, y, ...a) {
    return (x + y) * a.length
}
f(1, 2, ...params) === 9

var str = "foo"
var chars = [...str] // [ "f", "o", "o" ]

var customer = { name: "Foo" }
var card = { amount: 7, product: "Bar", unitprice: 42 }
var message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`


et `http://example.com/foo?bar=${bar + baz}&quux=${quux}`

function quux(strings, ...values) {
    strings[0] === "foo\n"
    strings[1] === "bar"
    strings.raw[0] === "foo\\n"
    strings.raw[1] === "bar"
    values[0] === 42
}
quux `foo\n${ 42 }bar`

String.raw `foo\n${ 42 }bar` === "foo\\n42bar"

0b111110111 === 503
0o767 === 503


let obj = {
    foo: "bar",
    ["baz" + quux()]: 42
}


obj = {
    foo(a, b) {},
    bar(x, y) {},
    * quux(x, y) {}
}

var list = [1, 2, 3]
var [a, , b] = list
    [b, a] = [a, b]

var { op, lhs, rhs } = getASTNode()

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