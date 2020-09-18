import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Input extends Component {
    static propTypes = {
        input: PropTypes.object.isRequired
    }

    render() {

        const borderLeft = this.props.input.required ? "2px solid #00a250" : ""

        return (
            <div className="input" >
                <label>{this.props.input.label}</label>
                <input style={{borderLeft}} defaultValue={this.props.input.value} />
            </div>
        )
    }
}
