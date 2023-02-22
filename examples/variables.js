// var
// let
// const

// Scope
// // Global scope
// var global = 100

// // 
// function localFunction() {
//     // Local scope
//     var local = 50
//     console.log(local + global);
// }

// // localFunction()
// console.log(global + local);

// Block scope 
// vùng code bên trong {}

const PI = 3.1412
PI = 3

let global = 10
let local = 50
{
    let local = 20
}

console.log(global + local);