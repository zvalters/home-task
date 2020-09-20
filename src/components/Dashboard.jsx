import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Form from './Form';
import ErrorMessage from './ErrorMessage';

function LoadingDataMessage() {
    return (
        <div className="dashboard">
            <h2 className="message">
                Loading data
            </h2>
        </div>
    );
}

export default class Dashboard extends Component {
    static propTypes = {
        url: PropTypes.string.isRequired
    }
    
    state = {
        hasErrors: false,
        errorMessage: "",
        dataReceived: false,
        data: {}
    }

    // Fetches the JSON for the markup of the dashboard
    componentDidMount() {
        fetch(this.props.url)
            .then(res => res.text())
            .then(data => this.setState({dataReceived: true, data: JSON.parse(data)}))
            .catch((err) => this.setState({hasErrors: true, errorMessage: err.message}));
    }

    render() {

        // Keeps track of any errors that should be displayed
        let error = null;

        // Checks if there have been any errors during fetching of data
        if (this.state.hasErrors) error = <ErrorMessage errorMessage={this.state.errorMessage} />
        // Checks if the data has been received yet
        if (!this.state.dataReceived) return <LoadingDataMessage />;
        // Makes sure the provided data contains any widgets to display
        if (this.state.data.widgets === undefined || this.state.data.widgets.length === 0) 
            error = <ErrorMessage errorMessage="No widgets have been provided" />
        
        // Maps each widget to its corresponding component type
        const items = this.state.data.widgets.map((item, index) => {
            switch(item.type) {
                case "form":
                    return <Form key={index} id={item.id} name={item.name} items={item.items} />;
                default:
                    return null;
            }
        });

        return (
            <div className="dashboard">
                {error === null ? items : error}
            </div>
        )
    }
}
