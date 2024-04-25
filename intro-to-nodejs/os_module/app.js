const calculate_tax = (salary, percentage) => {
    return (percentage / 100) * salary
}

function calculate_taxed_salary(salary, tax_amount) { 
    return salary - tax_amount
}


module.exports.calculate_tax = calculate_tax;
module.exports.calculate_taxed_salary = calculate_taxed_salary;