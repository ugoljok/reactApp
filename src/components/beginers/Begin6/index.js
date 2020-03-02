import React from 'react';
import SuperTitle from '../../Title';
import SuperInput from '../../Input';
import SuperBtn from '../../Button';

class Begin6 extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            a:"",
            b:"",
            c:""
        }
    }

    inputChangeAHandler = (text)=>{
        this.setState({a:text});
    }

    inputChangeBHandler = (text)=>{
        this.setState({b:text});
    }

    inputChangeCHandler = (text)=>{
        this.setState({c:text});
    }

    btnClickHandler = ()=>{
        var v = this.state.a*this.state.b*this.state.c;
        var s = 2*(parseInt(this.state.a*this.state.b)+parseInt(this.state.b*this.state.c)+parseInt(this.state.a*this.state.c));
        alert("Объем параллелепипеда = "+v+" , площадь поверхности = "+s);
    }


    render(){
        return <div>
            <SuperTitle>Begin6</SuperTitle>
            <SuperInput label="a" onchange={this.inputChangeAHandler} value={this.state.a}></SuperInput>
            <SuperInput label="b" onchange={this.inputChangeBHandler} value={this.state.b}></SuperInput>
            <SuperInput label="c" onchange={this.inputChangeCHandler} value={this.state.c}></SuperInput>
            <SuperBtn ontyk={this.btnClickHandler}>V&S</SuperBtn>
        </div>
    }
}

export default Begin6;