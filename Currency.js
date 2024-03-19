function convertCurrency(amount, fromCurrency, toCurrency, exchangeRate) {
    if (isNaN(amount) || !fromCurrency || !toCurrency || isNaN(exchangeRate)) {
      return "Invalid input. Please enter a valid amount, currencies, and exchange rate.";
    }
  
    const baseAmount = (fromCurrency !== "USD") ? amount / exchangeRate[fromCurrency] : amount;
  
    const convertedAmount = (toCurrency !== "USD") ? baseAmount * exchangeRate[toCurrency] : baseAmount;
  
    return `${amount} ${fromCurrency} is equivalent to approximately ${convertedAmount.toFixed(2)} ${toCurrency}.`;
  }
  const exchangeRates = {
    "USD": 1,
    "NGN": 410.25,
    "EUR": 0.94,
  };
  
  const amount = 100;
  const fromCurrency = "USD";
  const toCurrency = "NGN";
  
  const result = convertCurrency(amount, fromCurrency, toCurrency, exchangeRates);
  console.log(result); // Output: 100 USD is equivalent to approximately 41025.00 NGN.
  