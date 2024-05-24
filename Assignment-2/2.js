// Q.4)Write a program to reverse a array.


let arrayOriginal = [1, 2, 3, 4];

let arrayReverse = [];

console.log("Original Array: ");
console.log(arrayOriginal);

for (let i = arrayOriginal.length - 1;
    i >= 0; i--) {
    arrayReverse.push(arrayOriginal[i]);
}

console.log("Reversed Array: ");
console.log(arrayReverse);