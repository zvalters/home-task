import React, { Component } from 'react'
import Dashboard from './components/Dashboard';

const JSON_URL = "https://pastebin.pl/view/raw/1312212d";

export default class App extends Component {
    state = {
        hasErrors: false,
        dataReceived: false,
        data: {}
    }

    componentDidMount() {
        fetch(JSON_URL)
            .then(res => res.text())
            .then(data => this.setState({dataReceived: true, data: JSON.parse(data)}))
            .catch(() => this.setState({hasErrors: true}));
    }

    render() {
        return (
            <div className="App">
                { !this.state.hasErrors && 
                this.state.dataReceived && 
                <Dashboard data={this.state.data} 
                />}
            </div>
        );
    }
}