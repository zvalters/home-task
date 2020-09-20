import React, { useState } from 'react'

// Holds supported currency symbols in unicode
const currencySymbols = {
    "EUR": '\u20ac',
    "USD": '\u0024'
};

export default function Currency(props) {
    // Uses the numeral.js library for formating the currency
    const numeral = require('numeral');
    // Prepares a string to append to the format specifier for the precision
    let precision = "";
    for (let i = 0; i < props.input.precision; i++) {
        precision += "0";
    }
    // Prepares state for storing the value with the one provided in markup
    const [Value, setValue] = useState(
        currencySymbols[props.input.symbol] + "  " + 
        numeral(props.input.value).format('0,0.' + precision));

    // Handles changing of currency. Makes sure the numbers are safe and in the correct format
    function changeCurrencyValue(newValue) {
        const number = numeral(newValue);
        if (number.value() > Number.MAX_SAFE_INTEGER ||
            number.value() < Number.MIN_SAFE_INTEGER)
            return;
        const string = number.format('0,0.' + precision);
        setValue(currencySymbols[props.input.symbol] + "  " + string);
    }

    return <input 
                style={props.borderLeft} 
                type="text"
                value={Value}
                onChange={e => changeCurrencyValue(e.target.value)}
                required={props.input.required}
                />;
}