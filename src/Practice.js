let a = 10
let b = "Hi"
let c = [1, 2]
let d = c
c = c + 1

d.push(3)

d = [3, 4, 5]

console.log(`a = ${a}`)
console.log(`b = ${b}`)
console.log(`c = ${c}`)