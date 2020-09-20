import React from 'react'

export default function ErrorMessage(props) {
    return (
        <h2 className="message">
            An error has occured:<br />
            {props.errorMessage}
        </h2>
    );
}