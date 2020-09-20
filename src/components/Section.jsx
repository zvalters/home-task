import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Input from './Input';
import ErrorMessage from './ErrorMessage';

export default class Section extends Component {
    static propTypes = {
        section: PropTypes.object.isRequired
    }

    render() {

        // Keeps track of any errors that should be displayed
        let error = null;

        // Makes sure the provided data contains any inputs to display
        if (this.props.section.items === undefined ||
            this.props.section.items.length === 0) 
                error = <ErrorMessage errorMessage="No section inputs have been provided" />

        // Maps each item to its corresponding component type
        // All of the input types are initilized as Input
        const items = this.props.section.items.map((item, index) => {
            switch(item.type) {
                case "input":
                case "currency":
                case "dropdown-input":
                case "date":
                case "search":
                    return <Input key={index} input={item} />;
                default:
                    return null;
            }
        });
        
        // Defaults number of columns to 1 if none are provided
        const columns = this.props.section.columns === undefined ? 1 : this.props.section.columns ;
        // Prepares a string to repeat for grid allocation
        const columnSize = 100 / columns + "%";

        return (
            <div className="section">
                <div className="section-header">
                    <h3>{this.props.section.header}</h3>
                </div>
                <div 
                    className="section-body" 
                    // Sets up the template for the necessary number of columns
                    style={{gridTemplateColumns: "repeat(" + columns + ", " + columnSize + ")"}}
                    >
                    {error === null ? items : error}
                </div>
            </div>
        )
    }
}
