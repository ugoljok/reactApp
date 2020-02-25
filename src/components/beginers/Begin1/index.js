import React from 'react';
import SuperInput from '../../Input';
import SuperBtn from '../../Button';
import SuperTitle from '../../Title';

class Begin1 extends React.Component{

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
        alert("Периметр квадрата = "+this.state.a*2);
    }

    render(){
        return <div>
            <SuperTitle>Begin1</SuperTitle>
            <SuperInput label="a" onchange={this.inputChangeHandler} value={this.state.a}></SuperInput>
            <SuperBtn ontyk={this.btnClickHandler}>Периметр</SuperBtn>
        </div>;
    }
}

export default Begin1;