import React,{useState} from 'react';


 function SuperInput(props){
    const [error, setError] = useState(null);
    return(
        <label>{props.label}
            <input value={props.value} onChange={(data)=>{props.onchange(data.target.value);}} 
            onBlur={()=>{if(!props.allowNul && +props.value===0){setError("только не ноль")}else{setError(null)}}}/>
            <small>{error}</small>
        </label>
    );
}
SuperInput.defaultProps = {
    allowNegative:true,
    allowNul:true
}

export default SuperInput