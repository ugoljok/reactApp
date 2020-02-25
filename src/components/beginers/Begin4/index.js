import React from 'react';
import SuperTitle from '../../Title';
import SuperInput from '../../Input';
import SuperBtn from '../../Button';

class Begin4 extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            a:""
        }
    }

    inputChangeHandler = (text)=>{
        this.setState({a:text});
    }

    btnClickHandler = ()=>{
        var pi=3.14;
        alert("Длина окружности = "+pi*this.state.a)
    }

    render(){
        return <div>
            <SuperTitle>Begin4</SuperTitle>
            <SuperInput label="d" onchange={this.inputChangeHandler} value={this.state.a}></SuperInput>
            <SuperBtn ontyk={this.btnClickHandler}>Длина окружности</SuperBtn>
        </div>
    }

}

export default Begin4;