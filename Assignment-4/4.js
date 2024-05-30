function findCommonElements(matrix) {
    if (!matrix.length) return [];
  
    const commonElements = new Set(matrix[0]);
  
    for (let i = 1; i < matrix.length; i++) {
      const currentRow = new Set(matrix[i]);
      commonElements = new Set([...commonElements].filter(x => currentRow.has(x))); // Use spread syntax and filter
    }
  
    return Array.from(commonElements);
  }
  
  // Example usage
  const matrix = [
    [1, 2, 3, 4],
    [2, 4, 5, 6],
    [2, 3, 6, 8],
  ];
  
  const commonElements = findCommonElements(matrix);
  console.log("Common elements:", commonElements);
  