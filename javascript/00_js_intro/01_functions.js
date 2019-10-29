function add(x, y) {
    return x + y
}

const sub = function(x, y) {
    return x - y
}
// arrow function
const mul = (x, y) => {
    return x * y
}

const ssafy = function (name) {
    return `안녕, ${name}`
}

// 인자가 하나면 괄호도 줄일 수 있고, 한 줄이면 블럭도 없앨 수 있고, return 도 하나면 없앨 수 있다.
const ssafy1 = name => {
    return `안녕, ${name}`
}

const square = num => num**2

console.log(square(2))