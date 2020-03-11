import React from 'react';
import './App.css';
import Begin1 from '../beginers/Begin1';
import Begin2 from '../beginers/Begin2';
import Begin3 from '../beginers/Begin3';
import Begin4 from '../beginers/Begin4';
import Begin5 from '../beginers/Begin5';
import Begin6 from '../beginers/Begin6';
import Begin7 from '../beginers/Begin7';
import Begin8 from '../beginers/Begin8';
import Begin9 from '../beginers/Begin9';
import Begin10 from '../beginers/Begin10';
import Begin11 from '../beginers/Begin11';
import Begin12 from '../beginers/Begin12';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      
    };
  }

  
  render(){
    return (
      <div className="begin">
        <Begin1></Begin1>
        <Begin2></Begin2>
        <Begin3></Begin3>
        <Begin4></Begin4>
        <Begin5></Begin5>
        <Begin6></Begin6>
        <Begin7></Begin7>
        <Begin8></Begin8>
        <Begin9></Begin9>
        <Begin10></Begin10>
        <Begin11></Begin11>
        <Begin12></Begin12>
      </div>
    );
  }

  
}

export default App;
