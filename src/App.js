import './App.css';
import React from 'react';
import {Button} from './Button';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state =  {color: ''};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(){
    if(this.state.color !=='black'){
      this.setState(
        {color: 'black'}
      )
    }
    else{
      this.setState(
        {color:'pink'}
      )
    }
    
    
  }
  render(){
    return (
      <div className="App" style={{background:this.state.color}}>
        <Button change={this.handleChange}/>
      </div>
    );
  }
}

export default App;
