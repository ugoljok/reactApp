import React from 'react';
import './App.css';
import Begin1 from '../beginers/Begin1';
import Begin2 from '../beginers/Begin2';
import Begin3 from '../beginers/Begin3';
import Begin4 from '../beginers/Begin4';
import Begin5 from '../beginers/Begin5';

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
      </div>
    );
  }

  
}

export default App;
