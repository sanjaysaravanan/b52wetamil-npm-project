const isPalindrome = (str) => {
  const reversedString = str.split("").reduce((acc, char) => char + acc, "");
  return reversedString === str;
};

export default isPalindrome;
