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
                    return <Input key={index} input={item} />
                case "currency":
                    return <Input key={index} input={item} />
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
                <form 
                    className="section-body" 
                    style={{gridTemplateColumns: "repeat(" + this.props.section.columns + ", " + columnSize + ")"}}
                    >
                    {items}
                </form>
            </div>
        )
    }
}
