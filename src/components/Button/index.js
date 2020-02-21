import React from "react";

export default (props)=>{
    return(
        <button onClick={props.ontyk}>{props.children}</button>
    );
}