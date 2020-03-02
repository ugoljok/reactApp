import React from 'react';
import SuperTitle from '../../Title';
import SuperInput from '../../Input';
import SuperBtn from '../../Button';

class Begin10 extends React.Component{
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
        var aq = this.state.a*this.state.a;
        var bq = this.state.b*this.state.b;
        var sum = parseInt(aq)+parseInt(bq);
        var ras = aq-bq;
        var pr = aq*bq;
        var ch = aq/bq;
        alert("Сумма = "+sum+" , разность = "+ras+" , произведение = "+pr+", частное = "+ch);
    }

    render(){
        return <div>
            <SuperTitle>Begin10</SuperTitle>
            <SuperInput label="a" onchange={this.inputChangeAHandler} value={this.state.a}></SuperInput>
            <SuperInput label="b" onchange={this.inputChangeBHandler} value={this.state.b}></SuperInput>
            <SuperBtn ontyk={this.btnClickHandler}>Расчитать</SuperBtn>
        </div>

    }

}

export default Begin10;