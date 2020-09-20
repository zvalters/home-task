import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Section from './Section';
import ErrorMessage from './ErrorMessage';

function FormHeader(props) {
    return (
        <ul className="form-header">
            <li id="cancel-button">Cancel</li>
            <li id="form-name">{props.name}</li>
            <li id="save-button" onClick={e => props.submitForm(e)}>Save</li>
        </ul>
    );
}

export default class Form extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    static propTypes = {
        name: PropTypes.string.isRequired,
        items: PropTypes.array.isRequired
    }

    // A function for dealing with submission of the from
    // Currently only simulates the saving of the form
    onSubmit(e) {
        e.preventDefault();
        alert("Saved");
    }

    render() {

        // Keeps track of any errors that should be displayed
        let error = null;
        let items = null;

        // Makes sure the provided data contains any sections to display
        if (this.props.items === undefined ||
            this.props.items.length === 0) {
                error = <ErrorMessage errorMessage={"No form sections have been provided for " + this.props.name }/>
        } else {
            // Maps each item to its corresponding component type
            items = this.props.items.map((item, index) => {
                switch(item.type) {
                    case "section":
                        return <Section key={index} section={item} />;
                    default:
                        return null;
                }
            });
        }

        return (
            <form className="form">
                <FormHeader name={this.props.name} submitForm={this.onSubmit} />
                <div className="form-body">
                    {error === null ? items : error}
                </div>
            </form>
        )
    }
}


