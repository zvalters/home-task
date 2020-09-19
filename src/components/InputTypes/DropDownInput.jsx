import React, { useState } from 'react'

export default function DropDownInput(props) {
    const numeral = require('numeral');

    const [Percentage, setPercentage] = useState(
        numeral(props.input.percentage).format("0%"));

    function changePercentage(newValue) {
        const number = numeral(newValue);
        if (number.value() > 1 ||
            number.value() < -1)
            return;
        const string = number.format("0%");
        setPercentage(string);
    }

    const options = props.input.options.map((option, index) => {
        return <option key={index}>{option}</option>
    });

    return <div className="dropdown">
            <select 
                style={props.borderLeft} 
                required={props.input.required}
                >
                    {options}
            </select>
                
            <input 
                type="text"
                value={Percentage}    // Number value
                onChange={e => {changePercentage(e.target.value)}}
                required={props.input.required}
                />
            </div>
}