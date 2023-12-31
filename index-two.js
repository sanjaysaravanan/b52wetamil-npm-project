// Import the funcs from utilities.js
// import { isPalindrome } from "./isPalindrome.js";

// individual item/function imports
// import { factorial } from "./utilities.js";

// import all the items/function with any name using * as
import * as utils from "./utilities.js";

// default import from utilities.js
// import utilities from "./utilities.js";

// default import from isPalindrome.js
import checkPalin from "./isPalindrome.js";

console.log(utils);

console.log("Check for madam", checkPalin("madam"));
console.log("factorial of 5", utils.factorial(5));
