function findSaddlePoint(matrix) {
    if (!matrix.length) return null;
  
    const rows = matrix.length;
    const cols = matrix[0].length;
  
    for (let i = 0; i < rows; i++) {
      let rowMin = Infinity, minIndex = -1;
      for (let j = 0; j < cols; j++) {
        if (matrix[i][j] < rowMin) {
          rowMin = matrix[i][j];
          minIndex = j;
        }
      }
  
      let isSaddlePoint = true;
      for (let k = 0; k < rows; k++) {
        if (matrix[k][minIndex] > rowMin) {
          isSaddlePoint = false;
          break;
        }
      }
  
      if (isSaddlePoint) {
        return [i, minIndex];
      }
    }
  
    return null;
  }
  
  // Example usage
  const matrix = [
    [1, 2, 3],
    [4, 7, 6],
    [5, 8, 9],
  ];
  
  const saddlePoint = findSaddlePoint(matrix);
  
  if (saddlePoint) {
    console.log("Saddle point found at:", saddlePoint);
  } else {
    console.log("No saddle point found in the matrix");
  }
  