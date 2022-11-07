const chalk = require("chalk");
console.log(chalk.yellow("in test.js"));
const lodash = require("lodash");

const removeEvenNumbers = () => {
  const array = [1, undefined, 2, 3, 4, undefined, undefined];
  const odd = lodash.remove(array, (n) => {
    return n % 2 == 1 && n !== undefined;
  });

  console.log(odd);
};

module.exports = removeEvenNumbers;
