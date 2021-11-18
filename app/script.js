// Переменные js
let x = 2, y = 3;
console.log (x+y);
//5

console.log("Hello, World!");
//Hello, World!

console.log(x === 2 && y === 3);
// true

console.log(x > 2)
//false   


// Объекты и массивы js

let book = {
  topic : "JavaScript",
  edition : 7
}

console.log(book.topic)
// JavaScript
console.log(book.edition)
//7
console.log(book["edition"])
//7

book.author = "Flanagan";
console.log(book.author)
//Flanagan

//МАССИВЫ js

let arr = [1, 2, 3, 4, 7, 100];
console.log(arr[0])
//1
console.log(arr.length)
//6
console.log(arr[arr.length - 1]);
//100

arr[10] = 111;
console.log(arr)
//[ 1, 2, 3, 4, 7, 100, <4 empty items>, 111 ]

let promiss = [
  {x: 1, y: 0},
  {x: 0, y: 1}
]

console.log(promiss[0])
//{ x: 1, y: 0 }
console.log(promiss[0].x)
//1


//ФУНКЦИИ js
function plus1(x) {
  return x+1
}

console.log(plus1(5));
//6

let func = function (x) {
  return x*x
}

console.log(func(5))
//25


const plus2 = x => x+2;
console.log(plus2(10))
//12

