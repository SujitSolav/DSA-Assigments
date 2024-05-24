function findIntersection(arr1, arr2) {
    return arr1.filter(num => arr2.includes(num));
  }
  
  const arr1 = [1, 2, 2, 1];
  const arr2 = [2, 2];
  const intersection = findIntersection(arr1, arr2);
  console.log(intersection);