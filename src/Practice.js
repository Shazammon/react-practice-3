// let a = 10
// let b = "Hi"
// // let c = a
// let c = [1, 2]
// // let d = [3,4,5]
// let d = [1, 2]
// // c = c + 1

// d.push(6)

// // d = [3, 4, 5]
// add

// console.log(`a = ${a}`)
// console.log(`b = ${b}`)
// console.log(`d = ${d}`)
console.log(`c === d ${c === d}`)
console.log(`c == d ${c == d}`)


let c = [1, 2]
console.log(`c = ${c}`)
add(c, 3)
console.log(`c = ${c}`)

function add(array, element) {
    array.push(element)
}
