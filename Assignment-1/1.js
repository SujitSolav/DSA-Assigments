function Sum(arr, x) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === x) {
                return true;
            }
        }
    }
    return false;
}

const arr = [1,2,3,4,5];
let x = 8;

if (Sum(arr, x)) {
    console.log(`There exist elements in the array whose sum is ${x}`);
} else {
    console.log(`No such pair exists in the array.`);
}