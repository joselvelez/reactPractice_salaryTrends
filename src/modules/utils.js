import { getAverageSalaryByCompany, getAverageSalaryByRole, getIndustryAvergeSalary, getSalaryAtCompany } from './salaryDataFunctions';
import {salaryData} from './salaryData';

// Function that will create a new <section> with radio
// inputs based on the data provided in the array
export function renderInputButtons(arrayValues, arrayName) {
    const container = document.createElement('section');
    container.setAttribute('id', `${arrayName}Inputs`);

    let header = document.createElement('h3');
    header.innerText = `${arrayName}`;
    container.appendChild(header);

    arrayValues.forEach(label => {
        // For each label, create the radio input element
        let divElement = document.createElement('div');
        divElement.setAttribute('class', 'option');

        let inputElement = document.createElement('input');
        inputElement.setAttribute('type', 'radio');
        inputElement.setAttribute('name', arrayName);
        inputElement.setAttribute('value', label);
        divElement.appendChild(inputElement);

        // Create a label for that radio input element
        let labelElement = document.createElement('label');
        labelElement.setAttribute('for', label);
        labelElement.innerText = label;
        divElement.appendChild(labelElement);

        // Update the results when the input is selected
        inputElement.addEventListener('click', updateResults);
        container.appendChild(divElement);
    });
    document.querySelector(".Industry-data").prepend(container);
}

function updateResults() {
    // Get the current selected company and role from the radio button inputs
    const company = document.querySelector("input[name='company']:checked").value;
    const role = document.querySelector("input[name='role']:checked").value;

    // If either the company or role is unselected, return
    if (!company || !role) { return; }

   const averageSalaryByRole = getAverageSalaryByRole(role);
   const averageSalaryByCompany = getAverageSalaryByCompany(company);
   const salary = getSalaryAtCompany(role, company);
   const industryAverageSalary = getIndustryAvergeSalary(salaryData);

    // Render data to screen
    document.getElementById('salarySelected').innerText = `The salary for role ${role}s at ${company} is \$${salary}.`;
    document.getElementById('salaryAverageByRole').innerText = `The industry average salary for ${role} positions is \$${averageSalaryByRole}.`;
    document.getElementById('salaryAverageByCompany').innerText = `The averge salary at ${company} is \$${averageSalaryByCompany}.`;
    document.getElementById('salaryAverageByIndustry').innerText = `The average salary in this industry is \$${industryAverageSalary}.`;

}

// Helper function to format salary data
function formatNumber(number) {
    // Remove decimals and convert to string
    let numStr = String(Math.floor(number));

    // Starting 3 from the end, add a comma every 3 digits
    for (let i = numStr.length -3; i >= 0; i -= 3) {
        numStr = numStr.slice(0, i) + ',' + numStr.slice(i);
    }

    return numStr;
}