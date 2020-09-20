import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Section from './Section';

function FormHeader(props) {
    return  (<ul className="form-header">
                <li id="cancel-button">Cancel</li>
                <li id="form-name">{props.name}</li>
                <li id="save-button" onClick={e => props.submitForm(e)}>Save</li>
            </ul>);
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

    onSubmit(e) {
        e.preventDefault();
        alert("Saved");
    }

    render() {

        const items = this.props.items.map((item, index) => {
            switch(item.type) {
                case "section":
                    return <Section key={index} section={item} />;
                default:
                    return null;
            }
        });

        return (
            <form className="form">
                <FormHeader name={this.props.name} submitForm={this.onSubmit} />
                <div className="form-body">
                    {items}
                </div>
            </form>
        )
    }
}


