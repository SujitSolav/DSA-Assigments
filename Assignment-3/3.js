function findSecondLargest(arr) {
    if (arr.length < 2) return null;
    arr.sort((a, b) => b - a);
    return arr[1] !== undefined ? arr[1] : null;
  }
  
  const myArray = [12, 35, 1, 10, 34, 1];
  const secondLargest = findSecondLargest(myArray);
  console.log("The second largest element is:", secondLargest); 
  