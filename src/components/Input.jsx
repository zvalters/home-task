import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BasicInput from './InputTypes/BasicInput';
import Currency from './InputTypes/Currency';
import DropDownInput from './InputTypes/DropDownInput';
import DateInput from './InputTypes/DateInput';
import Search from './InputTypes/Search';

export default class Input extends Component {
    static propTypes = {
        input: PropTypes.object.isRequired
    }

    render() {

        const borderLeft = this.props.input.required ? "3px solid #00a250" : ""

        let input;
        switch(this.props.input.type) {
            case "input":
                input = <BasicInput borderLeft={{borderLeft}} input={this.props.input} />;
                break;
            case "currency":
                input = <Currency borderLeft={{borderLeft}} input={this.props.input} />;
                break;
            case "dropdown-input":
                input = <DropDownInput borderLeft={{borderLeft}} input={this.props.input} />;
                break;
            case "date":
                input = <DateInput borderLeft={{borderLeft}} input={this.props.input} />;
                break;
            case "search":
                input = <Search borderLeft={{borderLeft}} input={this.props.input} />;
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
