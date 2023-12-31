const isPalindrome = (str) => {
  const reversedString = str.split("").reduce((acc, char) => char + acc, "");
  return reversedString === str;
};

const isOdd = (num) => {
  return num % 2 === 1;
};

const isPrimeNumber = (num) => {
  // Prime Number Logic
};

const factorial = (num) => {
  if (num === 1) {
    return num;
  }
  return factorial(num - 1) * num;
};

export { isOdd, isPalindrome, isPrimeNumber, factorial };

// export default { isOdd, isPalindrome, isPrimeNumber, factorial };
