import React, { useState } from 'react'

export default function DateInput(props) {
    const moment = require("moment");
    const [currentDate, setCurrentDate] = useState(moment(new Date(props.input.value)).format("yyyy-0M-0d"));

    return <input 
                style={props.borderLeft} 
                type="date"
                value={currentDate}
                onChange={e => setCurrentDate(e.target.value)}
                required={props.input.required}
                pattern="\d{4}-\d{2}-\d{2}"
                />;
}