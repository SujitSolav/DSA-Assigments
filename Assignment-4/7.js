function isSubset(arr1, arr2) {
    const set1 = new Set(arr1); 
    for (const element of arr2) {
      if (!set1.has(element)) {
        return false; 
      }
    }
    return true; 
  }
  
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [1, 2];
  const arr3 = [5, 6];
  
  console.log("arr2 is subset of arr1:", isSubset(arr1, arr2));  // true
  console.log("arr3 is subset of arr1:", isSubset(arr1, arr3));  // false
  