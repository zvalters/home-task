import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Form from './Form';

export default class Dashboard extends Component {
    static propTypes = {
        data: PropTypes.object.isRequired
    }

    render() {

        const items = this.props.data.widgets.map((item) => {
            switch(item.type) {
                case "form":
                    return <Form key={item.id} name={item.name} items={item.items} />;
                default:
                    return null; // Might cause problems?
            }
        });

        return (
            <div className="dashboard">
                {items}
            </div>
        )
    }
}
