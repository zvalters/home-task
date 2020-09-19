import React, { Component, useState } from 'react'
import PropTypes from 'prop-types'

function BasicInput(props) {
    return <input 
                style={props.borderLeft} 
                type="text"
                defaultValue={props.input.value} 
                required={props.input.required}
                />;
}

const currencySymbols = {
    "EUR": '\u20ac',
    "USD": '\u0024'
};

function Currency(props) {
    const numeral = require('numeral');
    let precision = "";
    for (let i = 0; i < props.input.precision; i++) {
        precision += "0";
    }
    const [Value, setValue] = useState(
        currencySymbols[props.input.symbol] + " " + 
        numeral(props.input.value).format('0,0.' + precision));

    function changeCurrencyValue(newValue) {
        let number = numeral(newValue);
        if (number.value() > Number.MAX_SAFE_INTEGER ||
            number.value() < Number.MIN_SAFE_INTEGER)
            return;
        let string = number.format('0,0.' + precision);
        setValue(currencySymbols[props.input.symbol] + " " + string);
    }

    return <input 
                style={props.borderLeft} 
                type="text"
                value={Value}
                onChange={e => changeCurrencyValue(e.target.value)}
                required={props.input.required}
                />;
}

export default class Input extends Component {
    static propTypes = {
        input: PropTypes.object.isRequired
    }

    render() {

        const borderLeft = this.props.input.required ? "2px solid #00a250" : ""

        let input;
        switch(this.props.input.type) {
            case "input":
                input = <BasicInput borderLeft={{borderLeft}} input={this.props.input} />;
                break;
            case "currency":
                input = <Currency borderLeft={{borderLeft}} input={this.props.input} />;
                break;
            default:
                input = null;
        }

        return (
            <div className="input" >
                <label>{this.props.input.label}</label>
                {input}
            </div>
        )
    }
}
