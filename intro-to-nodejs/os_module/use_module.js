const { calculate_tax, calculate_taxed_salary } = require("./app");


const tax = calculate_tax(1000000, 16);
console.log(`The tax is ${tax}`);

const taxed_salary = calculate_taxed_salary(1000000, 16000);
console.log(`The taxed salary is ${taxed_salary}`);
