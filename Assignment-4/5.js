function spiralOrder(matrix) {
    if (!matrix.length) return [];
  
    const rows = matrix.length, cols = matrix[0].length;
    const result = [], top = 0, bottom = rows - 1, left = 0, right = cols - 1;
  
    while (top <= bottom && left <= right) {
      for (let col = left; col <= right; col++) result.push(matrix[top][col]);
      top++;
  
      if (left < right) {
        for (let row = top; row <= bottom; row++) result.push(matrix[row][right]);
        right--;
      }
  
      if (top <= bottom) {
        for (let col = right; col >= left; col--) result.push(matrix[bottom][col]);
        bottom--;
      }
  
      if (left < right) {
        for (let row = bottom; row >= top; row--) result.push(matrix[row][left]);
        left++;
      }
    }
  
    return result;
  }
  
  const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  const spiralTraversal = spiralOrder(matrix);
  console.log(spiralTraversal);
  