import React from 'react';
import SuperTitle from '../../Title';
import SuperInput from '../../Input';
import SuperBtn from '../../Button';

class  Begin13 extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            R1:"",
            R2:""
        }
    }

    inputChangeR1Handler = (text)=>{
        this.setState({R1:text});
    }

    inputChangeR2Handler = (text)=>{
        this.setState({R2:text});
    }

    isBtnDisabled = ()=>{
        if(Math.abs(+this.state.R1)>0 && Math.abs(+this.state.R2)>0){
            if(+this.state.R1 > +this.state.R2){
                return false;
            }else{
                return true;
            }
        }else{
            return true;
        }
    }

    btnClickHandler= ()=>{
        const pi = 3.14;
        const r1 = +this.state.R1;
        const r2 = +this.state.R2;
        const S1 = pi*r1*r1;
        const S2 = pi*r2*r2;
        const S3 = S1-S2;
        alert("Площади равны "+S1+" и "+S2+", площадь кольца "+S3);
    }

    render(){
        return <div>
                    <SuperTitle>Begin13</SuperTitle>
                    <SuperInput label="R1" onchange={this.inputChangeR1Handler} value={this.state.R1}></SuperInput>
                    <SuperInput label="R2" onchange={this.inputChangeR2Handler} value={this.state.R2}></SuperInput>
                    <SuperBtn disabled={this.isBtnDisabled()} ontyk={this.btnClickHandler}>Расчитать</SuperBtn>
                </div>
    }
}

export default Begin13