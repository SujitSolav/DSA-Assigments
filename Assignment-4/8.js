function printBoundary(matrix) {
    if (!matrix.length || !matrix[0].length) return;
  
    const rows = matrix.length, cols = matrix[0].length;
  
    for (let col = 0; col < cols; col++) console.log(matrix[0][col]);
  
    for (let col = 1; col < cols - 1; col++) console.log(matrix[rows - 1][col]);
  
    for (let row = rows - 2; row > 0; row--) console.log(matrix[row][cols - 1]);
  
    for (let row = 1; row < rows - 1; row++) console.log(matrix[row][0]);
  }
  
  const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  printBoundary(matrix);
  