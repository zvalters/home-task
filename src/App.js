import React from 'react'
import Dashboard from './components/Dashboard';

//const JSON_URL = "presets/data.json";                         // The provided file
//const JSON_URL = "presets/no_widgets.json";                   
//const JSON_URL = "presets/no_sections.json";
//const JSON_URL = "presets/no_inputs.json";
//const JSON_URL = "presets/no_options.json";
const JSON_URL = "https://pastebin.pl/view/raw/1312212d";     // Data mimicking preview picture
//const JSON_URL = "https://pastebin.pl/view/raw/8a505377";     // Multiple section sample


function App() {
    return (
        <div className="App">
            <Dashboard url={JSON_URL} />
        </div>
    );
}

export default App;