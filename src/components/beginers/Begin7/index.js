import React from 'react';
import SuperTitle from '../../Title';
import SuperInput from '../../Input';
import SuperBtn from '../../Button';

class Begin7 extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            r:""
        }

    }

    inputChangeHandler = (text)=>{
        this.setState({r:text});
    }

    btnClickHandler = ()=>{
        var pi = 3.14;
        var l = 2*pi*this.state.r;
        var s = pi*this.state.r*this.state.r;
        alert("Длина окружности = "+l+" , площадь круга= "+s);
    }

    render(){
        return <div>
            <SuperTitle>Begin7</SuperTitle>
            <SuperInput label="r" onchange={this.inputChangeHandler} value={this.state.r}></SuperInput>
            <SuperBtn ontyk={this.btnClickHandler}>L&S</SuperBtn>
        </div>
    }
}

export default Begin7;