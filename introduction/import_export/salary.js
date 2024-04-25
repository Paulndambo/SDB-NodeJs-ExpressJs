const calculate_tax = (salary, tax) => {
    return salary * (tax / 100);   
}

const calculate_net_salary = (salary, tax_amount) => {
    return salary - tax_amount 
}


module.exports.calculate_tax = calculate_tax;
module.exports.calculate_net_salary = calculate_net_salary;

//module.exports = {
//    calculate_tax,
//    calculate_net_salary
//}