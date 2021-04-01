import IndustryData from './modules/IndustryData';
import { salaryData, getCompanies, getRoles } from './modules/salaryData.js';
// import { renderInputButtons } from './modules/utils.js';
import './App.css';

// Get the companies and roles from the salaryData module
const companies = getCompanies(salaryData);
const roles = getRoles(salaryData);

// Create an imput button for every company and role represented in the data
// renderInputButtons(companies, 'company');
// renderInputButtons(roles, 'role');

function App() {
  return (
    <div>
      <h2>React Practice: Industry Salary Data</h2>
      <IndustryData initialCompanies={companies} initialRoles={roles}/>
      <p>React Practice: Salary Trends</p>
      <div className="main">
        <section id="resultsContainer">
          <h3>Details</h3>
          <p id="salarySelected">...</p>
          <p id="salaryAverageByRole">...</p>
          <p id="salaryAverageByCompany">...</p>
          <p id="salaryAverageByIndustry">...</p>
        </section>
      </div>
    <p>{getRoles(salaryData)}</p>
    <p>{getCompanies(salaryData)}</p>
    </div>
  );
}

export default App;
