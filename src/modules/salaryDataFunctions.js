import { getCompanies, getRoles, getDataByCompany, getDataByRole, salaryData } from './salaryData';

export const getAverageSalaryByRole = role => {
    const roleData = getDataByRole(role);
    const roleSalaries = roleData.map(item => item.salary);
    return calculateAverage(roleSalaries);
}

export const getAverageSalaryByCompany = company => {
    const companyData = getDataByCompany(company);
    const companySalaries = companyData.map(item => item.salary);
    return calculateAverage(companySalaries);
}

export const getSalaryAtCompany = (role, company) => {
    const companyData = getDataByCompany(company);
    const roleAtCompany = companyData.find(item => item.role === role);
    return roleAtCompany.salary;
}

export const getIndustryAvergeSalary = () => {
    const allSalaries = salaryData.map(item => item.salary);
    return calculateAverage(allSalaries);
}

// Helper function to calculate averages
function calculateAverage(arrayOfNumbers) {
    let total = 0;
    arrayOfNumbers.forEach(number => total += number)
    return (total / arrayOfNumbers.length).toFixed(2);

    // Could use reduce method here instead...
}