import React from 'react';

export default function(props){
    return(
        <label>{props.label}
            <input value={props.value} onChange={(data)=>{props.onchange(data.target.value);}}/>
        </label>
    );
}