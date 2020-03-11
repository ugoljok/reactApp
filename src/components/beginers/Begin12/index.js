import React from 'react';
import SuperTitle from '../../Title';
import SuperInput from '../../Input';
import SuperBtn from '../../Button';

class Begin12 extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            a:"",
            b:""
        }
    }

    inputChangeAHandler = (text)=>{
        this.setState({a:text});
    }

    inputChangeBHandler = (text)=>{
        this.setState({b:text});
    }

    btnClickHandler = ()=>{
        const a = +this.state.a;
        const b = +this.state.b;
        const c = Math.sqrt(a*a + b*b);
        const p = a+b+c;
        alert("Гипотенуза = "+c+", периметр = "+p);
    }

    isBtnDisabled = ()=>{
        if(Math.abs(+this.state.a)>0 && Math.abs(+this.state.b)>0){
            return false;
        }else{
            return true;
        }
    }

    render(){
        return <div>
            <SuperTitle>Begin12</SuperTitle>
            <SuperInput label="a" onchange={this.inputChangeAHandler} value={this.state.a}></SuperInput>
            <SuperInput label="b" onchange={this.inputChangeBHandler} value={this.state.b}></SuperInput>
            <SuperBtn disabled={this.isBtnDisabled()} ontyk={this.btnClickHandler}>Gip&P</SuperBtn>
        </div>
    }
}

export default Begin12;