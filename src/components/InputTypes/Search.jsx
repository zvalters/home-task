import React from 'react'

export default function Search(props) {
    return <input 
                style={props.borderLeft}
                className="search" 
                type="text"
                defaultValue={props.input.value} 
                required={props.input.required}
                />;
}