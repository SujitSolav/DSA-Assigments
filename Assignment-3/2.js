function countFrequency(arr) {
    const counts = {};
    arr.forEach(num => counts[num] = (counts[num] || 0) + 1);
    return counts;
  }
  
  const myArray = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
  const frequency = countFrequency(myArray);
  console.log(frequency); 
  