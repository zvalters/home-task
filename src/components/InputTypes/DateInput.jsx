import React, { useState } from 'react'

export default function DateInput(props) {
    // Uses the moment library for displaying the date in the corract format
    const moment = require("moment");
    // Disables a warning that doesn't apply in this case. 
    // It comes up because invalid input is being used, which is necessary in this case
    moment.suppressDeprecationWarnings = true;
    // Sets up state with the value in the markup
    const [currentDate, setCurrentDate] = useState(
        moment(new Date(props.input.value)).format("MMMM d, YYYY"));

    // Handles changing of the date. Makes sure it is in the correct format
    function changeDate(newValue) {
        const newDate = moment(newValue);
        if (!newDate.isValid())
            // Allows the user to input an invalid date
            // This allows the user to prepare a valid one
            setCurrentDate(newValue)
        else
            // If the current input is recognized as valid, it is formated as needed
            setCurrentDate(newDate.format("MMMM D, YYYY"));
    }

    // Prepares styling to notify the user that the input is invalid
    const isValid = (moment(currentDate).isValid()) ? null : 
        {borderTop: "1px solid #f9507c", borderBottom: "1px solid #f9507c"};

    return <input 
                style={{...props.borderLeft, ...isValid}}
                className="date"
                type="input"
                value={currentDate}
                onChange={e => changeDate(e.target.value)}
                required={props.input.required}
                />;
}