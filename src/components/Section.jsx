import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Section extends Component {
    static propTypes = {
        section: PropTypes.object.isRequired
    }

    render() {
        return (
            <div className="section">
                <div className="section-header">
                    <h3>{this.props.section.header}</h3>
                </div>
                
            </div>
        )
    }
}
