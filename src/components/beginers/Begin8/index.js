import React from 'react';
import SuperTitle from '../../Title';
import SuperInput from '../../Input';
import SuperBtn from '../../Button';

class Begin8 extends React.Component{
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
        var s = (parseInt(this.state.a)+parseInt(this.state.b))/2;
        alert("Среднее арифметическое = "+s);
    }

    render(){
        return <div>
            <SuperTitle>Begin8</SuperTitle>
            <SuperInput label="a" onchange={this.inputChangeAHandler} value={this.state.a}></SuperInput>
            <SuperInput label="b" onchange={this.inputChangeBHandler} value={this.state.b}></SuperInput>
            <SuperBtn ontyk={this.btnClickHandler}>Расчитать</SuperBtn>
        </div>
    }
}


export default Begin8;