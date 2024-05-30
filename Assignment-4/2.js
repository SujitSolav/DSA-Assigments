function transposeMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const transposed = Array.from({ length: cols }, () => new Array(rows));
  
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        transposed[j][i] = matrix[i][j];
      }
    }
  
    return transposed;
  }
  
  const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  const transposedMatrix = transposeMatrix(matrix);
  
  console.log("Original matrix:");
  console.log(matrix);
  
  console.log("\nTransposed matrix:");
  console.log(transposedMatrix);
  