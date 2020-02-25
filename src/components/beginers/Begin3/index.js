import React from 'react';
import SuperBtn from '../../Button';
import SuperInput from '../../Input';
import SuperTitle from '../../Title';

class Begin3 extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            a:"",
            b:""
        }
    }

    inputChangeAHandler=(text)=>{
        this.setState({a:text});
    }

    inputChangeBHandler=(text)=>{
        this.setState({b:text});
    }

    btnClickHandler=()=>{
        var s=parseInt(this.state.a)*parseInt(this.state.b);
        var p=(parseInt(this.state.a)+parseInt(this.state.b))*2;
        alert("Площадь = "+s+", Периметр = "+p)
    }

    render(){
        return <div>
            <SuperTitle>Begin3</SuperTitle>
            <SuperInput label="a" onchange={this.inputChangeAHandler} value={this.state.a}></SuperInput>
            <SuperInput label="b" onchange={this.inputChangeBHandler} value={this.state.b}></SuperInput>
            <SuperBtn ontyk={this.btnClickHandler}>P&S</SuperBtn>
        </div>
    }
    
}

export default Begin3;