import React, { Component } from 'react';
import './App.css';
import Header from './components/header'; 

class App extends Component {
  render() {
    return (
     <div> 
        <div className="">
          <Header /> 
            <div className="container">
              {this.props.children}
            </div>
        </div>
      </div>
    );
  }
}

export default App;
