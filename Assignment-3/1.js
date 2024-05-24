function findMissingNumber(arr) {
    const n = arr.length + 1;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
  }
  
  const myArray = [1, 2, 4, 6, 3, 7, 8];
  const missingNumber = findMissingNumber(myArray);
  console.log("The missing number is:", missingNumber); // Output: The missing number is: 5
  