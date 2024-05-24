function moveZeros(arr) {
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        [arr[i], arr[j]] = [arr[j], arr[i]]; 
        j++;
      }
    }
    return arr;
  }
  
  const myArray = [0, 1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9];
  const modifiedArray = moveZeros(myArray);
  console.log(modifiedArray); 
  