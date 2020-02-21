import React from 'react';
import './App.css';
import Begin1 from '../beginers/Begin1';
import Begin2 from '../beginers/Begin2';

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
      </div>
    );
  }

  
}

export default App;
