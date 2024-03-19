function solveQuadratic(a, b, c) {
    // Handle invalid input
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      return "Invalid input. Please enter valid coefficients (numbers).";
    }
  
    // Calculate discriminant (b^2 - 4ac)
    const discriminant = Math.pow(b, 2) - 4 * a * c;
  
    // Handle different cases based on discriminant
    if (discriminant > 0) {
      // Two real solutions
      const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      return `The solutions are x1 = ${root1.toFixed(2)} and x2 = ${root2.toFixed(2)}`;
    } else if (discriminant === 0) {
      // One repeated real solution
      const root = -b / (2 * a);
      return `The solution is x = ${root.toFixed(2)} (repeated)`;
    } else {
      // Two complex solutions
      const realPart = -b / (2 * a);
      const imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
      return `The solutions are x1 = ${realPart.toFixed(2)} + ${imaginaryPart.toFixed(2)}i and x2 = ${realPart.toFixed(2)} - ${imaginaryPart.toFixed(2)}i`;
    }
  }
  
  //
  