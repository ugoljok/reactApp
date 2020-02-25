import React from 'react';
import SuperInput from '../../Input';
import SuperBtn from '../../Button';
import SuperTitle from '../../Title'

class Begin2 extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            a:""
        }
    }

    inputChangeHandler=(text)=>{
        this.setState({a:text});
    }

    btnClickHandler=()=>{
        alert("Площадь квадрата = "+this.state.a*this.state.a);
    }

    render(){
        return <div>
            <SuperTitle>Begin2</SuperTitle>
            <SuperInput label="a" onchange={this.inputChangeHandler} value={this.state.a}></SuperInput>
            <SuperBtn ontyk={this.btnClickHandler}>Площадь</SuperBtn>
        </div>
    }
}

export default Begin2;