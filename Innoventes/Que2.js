function getWordLength(number) {
    const oneDigitWords = [
      "Zero", "One", "Two", "Three", "Four",
      "Five", "Six", "Seven", "Eight", "Nine"
    ];
  
    const teens = [
      "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen",
      "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"
    ];
  

    const tens = [
      "", "", "Twenty", "Thirty", "Forty", "Fifty",
      "Sixty", "Seventy", "Eighty", "Ninety"
    ];
  
    if (number === 0) {
      return "Zero";
    } else if (number < 10) {
      return oneDigitWords[number];
    } else if (number < 20) {
      return teens[number - 10];
    } else if (number < 100) {
      const tenDigit = Math.floor(number / 10);
      const oneDigit = number % 10;
      return tens[tenDigit] + (oneDigit !== 0 ? " " + oneDigitWords[oneDigit] : "");
    } else {
      return "Number out of range (two-digit numbers only).";
    }
  }
  
  function findNumberWithLongestWordLength(arr) {
    const wordLengths = {};
  
   
    for (const number of arr) {
      const word = getWordLength(number);
      wordLengths[number] = word.length;
    }
  
    let longestNumber = arr[0];
    for (const number of arr) {
      if (wordLengths[number] > wordLengths[longestNumber]) {
        longestNumber = number;
      }
    }
  
    return longestNumber;
  }
  
  const A = [10, 112, 38, 62, 90];
  const result = findNumberWithLongestWordLength(A);
  console.log(result); // Output: 38
  