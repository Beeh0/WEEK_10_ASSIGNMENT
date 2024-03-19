function daysInMonth(month, year) {
    // Handle invalid input
    if (isNaN(month) || month < 1 || month > 12 || isNaN(year)) {
      return "Invalid input. Please enter a valid month (1-12) and year.";
    }
  
    // Array of days in each month (non-leap year)
    const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    // Check for leap year
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  
    // Adjust for February in leap years
    if (month === 2 && isLeapYear) {
      return daysInMonths[month - 1] + 1;
    } else {
      return daysInMonths[month - 1];
    }
  }
  
  // Example usage
  const month = 3;
  const year = 2024;
  
  const days = daysInMonth(month, year);
  console.log(`There are ${days} days in ${month} of ${year}.`); // Output: There are 31 days in March of 2024.
  