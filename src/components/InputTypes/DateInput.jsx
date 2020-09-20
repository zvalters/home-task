import React, { useState } from 'react'

export default function DateInput(props) {
    const moment = require("moment");
    const [currentDate, setCurrentDate] = useState(
        moment(new Date(props.input.value)).format("MMMM d, YYYY"));

    function changeDate(newValue) {
        const newDate = moment(newValue);
        if (!newDate.isValid())
            setCurrentDate(newValue)
        else
            setCurrentDate(newDate.format("MMMM D, YYYY"));
    }

    const isValid = (moment(currentDate).isValid()) ? null : 
        {borderTop: "1px solid red", borderBottom: "1px solid red"};

    return <input 
                style={{...props.borderLeft, ...isValid}}
                className="date"
                type="input"
                value={currentDate}
                onChange={e => changeDate(e.target.value)}
                required={props.input.required}
                />;
}