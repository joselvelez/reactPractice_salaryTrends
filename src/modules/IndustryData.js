import React from 'react';
import { renderInputButtons } from './utils';
import './IndustryData.css';

function IndustryData(props) {
    return(
        <div className="Industry-data">
            <div className="Data">
                <p>Companies</p>
                <ul>
                    {props.initialCompanies.map(item => <li>{item}</li>)}
                </ul>
            </div>
            <div className="Data">
                <p>Roles</p>
                <ul>
                    {props.initialRoles.map(item => <li>{item}</li>)}
                </ul>
            </div>
            <div className="Data">
                <p>Details</p>
                {renderInputButtons(props.initialCompanies, "Companies")};
            </div>
      </div>
    )
}

export default IndustryData;