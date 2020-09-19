import React, { useState } from 'react'

const currencySymbols = {
    "EUR": '\u20ac',
    "USD": '\u0024'
};

export default function Currency(props) {
    const numeral = require('numeral');
    let precision = "";
    for (let i = 0; i < props.input.precision; i++) {
        precision += "0";
    }
    const [Value, setValue] = useState(
        currencySymbols[props.input.symbol] + "  " + 
        numeral(props.input.value).format('0,0.' + precision));

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