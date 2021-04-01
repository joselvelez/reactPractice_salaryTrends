export const salaryData = [
    { role: 'CTO', company: 'Big Data Inc.', salary: 320000, id:1},
    { role: 'Technical Lead', company: 'Big Data Inc.', salary: 230000, id:2},
    { role: 'Software Engineer II', company: 'Big Data Inc.', salary: 180000, id:3},
    { role: 'Software Engineer I', company: 'Big Data Inc.', salary: 140000, id:4},
    { role: 'CTO', company: 'Medium Data Inc.', salary: 215000, id:5},
    { role: 'Technical Lead', company: 'Medium Data Inc.', salary: 165000, id:6},
    { role: 'Software Engineer II', company: 'Medium Data Inc.', salary: 140000, id:7},
    { role: 'Software Engineer I', company: 'Medium Data Inc.', salary: 115000, id:8},
    { role: 'CTO', company: 'Small Data Inc.', salary: 175000, id:9},
    { role: 'Technical Lead', company: 'Small Data Inc.', salary: 135000, id:10},
    { role: 'Software Engineer II', company: 'Small Data Inc.', salary: 115000, id:11},
    { role: 'Software Engineer I', company: 'Small Data Inc.', salary: 95000, id:12},
];

// Get a list of unique roles from the salaryData object array
export const getRoles = (data) => {
    let roles = data.map(obj => obj.role);
    return [...new Set(roles)];
}

// Get a list of unique companies from the salary Data object array
export const getCompanies = (data) => {
    let companies = data.map(obj => obj.company);
    return [...new Set(companies)];
}

// Get an array of data objects for a particular role
export const getDataByRole = (role) => {
    return salaryData.filter(obj => obj.role === role);
}

// Get an array of data objects for a particular company
export const getDataByCompany = (company) => {
    return salaryData.filter(obj => obj.company === company);
}