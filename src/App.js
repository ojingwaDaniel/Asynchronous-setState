import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component{
  constructor(){
    super()
    this.state = {
    number: 48
  };
  }
  clickChange = ()=>{
    this.setState((prvState,prvProp)=>{
      return { number : prvState.number + prvProp.increment}
    
    })
  }
  render(){
     return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{this.state.number}</p>
        <button onClick={this.clickChange}>update Number</button>
      </header>
    </div>
  );
}


  }
  
 
export default App;
