import React from "react";

export default (props)=>{
    return(
        <button disabled={props.disabled} onClick={props.ontyk}>{props.children}</button>
    );
}