/**
 * Title:        EduMath
 * Description:  SER515 Project
 * Copyright:    Copyright (c) 2019
 * Company:      Computer Software Engineering 
 * @author Sajjan, Amit, Vaibhav, Shubham
 * @version 1.0
 */
import React, { Component } from 'react';
import './App.css';
import AppDragDropDemo from './AppDragDropDemo';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loginPage:[],
      uploadScreen:[]
    }
  }
  componentWillMount(){
    var loginPage =[];
    loginPage.push(<AppDragDropDemo appContext={this} key={"appdragdropdemo"}/>);

  }
  render() {
    return (
      <div className="AppDragDropDemo">
        {this.state.loginPage}
        {this.state.uploadScreen}
      </div>
    );
  }
}

export default App;
