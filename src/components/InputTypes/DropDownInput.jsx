import React, { useState } from 'react'
import ErrorMessage from '../ErrorMessage';

export default function DropDownInput(props) {
    // Uses the numeral.js library for formating the percentages
    const numeral = require('numeral');

    // Creates state for the percentage
    const [percentage, setPercentage] = useState(
        numeral(props.input.percentage).format("0%"));

    // Used to change the percentage and forbid invalid values
    function changePercentage(newValue) {
        const number = numeral(newValue);
        if (number.value() > 1 ||
            number.value() < -1)
            return;
        const string = number.format("0%");
        setPercentage(string);
    }

    // Checks if any options have been provided for the select
    let error = null;
    let options = null;
    if (props.input.options === undefined ||
        props.input.options.length === 0) {
            error = <ErrorMessage errorMessage="No options have been provided" />
    } else {
        // Maps each option for the use in the select
        options = props.input.options.map((option, index) => {
            return <option key={index}>{option}</option>
        });
    }

    return error === null ? (
        <div className="dropdown">
            <select 
                style={props.borderLeft} 
                required={props.input.required}
                >
                    {options}
            </select>
                
            <input 
                type="text"
                value={percentage}    // Number value
                onChange={e => {changePercentage(e.target.value)}}
                required={props.input.required}
                />
        </div>
    ) : error;
}