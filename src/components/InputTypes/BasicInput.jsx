import React from 'react'

export default function BasicInput(props) {
    return <input 
                style={props.borderLeft} 
                type="text"
                defaultValue={props.input.value} 
                required={props.input.required}
                />;
}