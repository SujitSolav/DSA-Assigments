function searchMatrix(matrix, target) {
    let row = 0;
    let col = matrix[0].length - 1;
  
    while (row < matrix.length && col >= 0) {
      if (matrix[row][col] === target) {
        return [row, col];
      } else if (matrix[row][col] < target) {
        row++;
      } else {
        col--; 
      }
    }
  
    return [-1, -1]; 
  }
  
  const matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 17, 20, 24],
  ];
  
  const target = 5;
  const result = searchMatrix(matrix, target);
  
  if (result[0] === -1) {
    console.log(`${target} not found in the matrix`);
  } else {
    console.log(`${target} found at index [${result[0]}, ${result[1]}]`);
  }
  