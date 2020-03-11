import React from 'react';
import SuperTitle from '../../Title';
import SuperInput from '../../Input';
import SuperBtn from '../../Button';

class Begin11 extends React.Component{
    constructor(props){
        super(props);

        this.state={
            a:"",
            b:""
        }
    }

    inputChangeAHandler = (text)=>{
        this.setState({a:text})
    }

    inputChangeBHandler = (text)=>{
        this.setState({b:text})
    }

    isBtnEnabled = ()=>{
        if(+this.state.a===0 || +this.state.b===0){
            return false;
        }else{
            return true;
        }
    }

    btnClickHandler = ()=>{
        const sum = Math.abs(this.state.a)+Math.abs(this.state.b);
        const rasn = Math.abs(this.state.a)-Math.abs(this.state.b);
        const proiz = Math.abs(this.state.a)*Math.abs(this.state.b);
        const del = Math.abs(this.state.a)/Math.abs(this.state.b);
        alert("Сумма модулей = "+sum+", разность модулей = "+rasn+", произведение модулей = "+proiz+", частное модулей = "+del);
    }

    render(){
        return <div>
            <SuperTitle>Begin11</SuperTitle>
            <SuperInput allowNul={false} label="a" onchange={this.inputChangeAHandler} value={this.state.a}></SuperInput>
            <SuperInput allowNul={false} label="b" onchange={this.inputChangeBHandler} value={this.state.b}></SuperInput>
            <SuperBtn disabled={!this.isBtnEnabled()} ontyk={this.btnClickHandler}>Расчитать</SuperBtn>
        </div>
    }
}

export default Begin11