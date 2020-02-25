import React from 'react';
import SuperInput from '../../Input';
import SuperBtn from '../../Button';
import SuperTitle from '../../Title';

class Begin5 extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            a:""
        }
    }

    inputChangeHandler = (text)=>{
        this.setState({a:text})
    }

    btnClickHandler = ()=>{
        var v = parseInt(this.state.a)*parseInt(this.state.a)*parseInt(this.state.a);
        var s = parseInt(this.state.a)*parseInt(this.state.a)*6;
        alert("Объем куба = "+v+", площадь поверхности куба = "+s)
    }

    render(){
        return <div>
            <SuperTitle>Begin5</SuperTitle>
            <SuperInput label="a" onchange={this.inputChangeHandler} value={this.state.a}></SuperInput>
            <SuperBtn ontyk={this.btnClickHandler}>V&S</SuperBtn>
        </div>
    }

}

export default Begin5;