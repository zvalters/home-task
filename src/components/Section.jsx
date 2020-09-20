import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Input from './Input';

export default class Section extends Component {
    static propTypes = {
        section: PropTypes.object.isRequired
    }

    render() {

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

        const columnSize = 100 / this.props.section.columns + "%";

        return (
            <div className="section">
                <div className="section-header">
                    <h3>{this.props.section.header}</h3>
                </div>
                <div 
                    className="section-body" 
                    style={{gridTemplateColumns: "repeat(" + this.props.section.columns + ", " + columnSize + ")"}}
                    >
                    {items}
                </div>
            </div>
        )
    }
}
