/**
 * Title:        EduMath
 * Description:  SER515 Project
 * Copyright:    Copyright (c) 2019
 * Company:      Computer Software Engineering 
 * @author Sajjan, Amit, Vaibhav, Shubham
 * @version 1.0
 */
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
var apiBaseUrl = "http://localhost:4000/api/";
import axios from 'axios';
import Landing from './Landing';
import AppDragDropDemo from './AppDragDropDemo';
import AppDragDropDemo1 from './AppDragDropDemo1';
import AppDragDropDemo2 from './AppDragDropDemo2';
class Login extends Component {
  constructor(props){
    super(props);
    var localloginComponent=[];
    localloginComponent.push(
      <MuiThemeProvider key={"theme"}>
        <div>
         <TextField
           hintText="Enter your Student Id"
           floatingLabelText="Student Id"
           onChange={(event,newValue) => this.setState({username:newValue})}
           />
         <br/>
           <TextField
             type="password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
           <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event, this.state.loginRole)}/>

       </div>
       </MuiThemeProvider>
    )
    this.state={
      username:'',
      password:'',
      menuValue:1,
      loginComponent:localloginComponent,
      loginRole:'student1'
    }
  }
  componentWillMount(){
  // console.log("willmount prop values",this.props);
  if(this.props.role != undefined){
    if(this.props.role == 'student1'){
      console.log("in student componentWillMount");
      var localloginComponent=[];
      localloginComponent.push(
        <MuiThemeProvider>
          <div>
           <TextField
             hintText="Enter your Student Id"
             floatingLabelText="Student Id"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event, this.props.role)}/>
         </div>
         </MuiThemeProvider>
      )
      this.setState({menuValue:1,loginComponent:localloginComponent,loginRole:'student1'})
    } else if(this.props.role == 'student6'){
      console.log("in student componentWillMount");
      var localloginComponent=[];
      localloginComponent.push(
        <MuiThemeProvider>
          <div>
           <TextField
             hintText="Enter your College Rollno"
             hintText="Enter your Student Id"
             floatingLabelText="Student Id"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
             <br/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event, this.props.role)}/>
         </div>
         </MuiThemeProvider>
      )
      this.setState({menuValue:1,loginComponent:localloginComponent,loginRole:'student6'})
    }
    else if(this.props.role == 'teacher'){
      console.log("in teacher componentWillMount");
      var localloginComponent=[];
      localloginComponent.push(
        <MuiThemeProvider>
          <div>
           <TextField
             hintText="Enter your Teacher id code"
             floatingLabelText="Teacher Id"
             onChange={(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange={(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event, this.props.role)}/>

         </div>
         </MuiThemeProvider>
      )
      this.setState({menuValue:2,loginComponent:localloginComponent,loginRole:'teacher'})
    }
  }
  }
  handleClick(event){
    handleClick(event, role){
      var self = this;
      var payload={
        "userid":this.state.username,
        "password":this.state.password
        "password":this.state.password,
        "role":role
      }
      axios.post(apiBaseUrl+'login', payload)
     .then(function (response) {
       console.log(response);
       if(response.data.code == 200){
        var uploadScreen=[];
  
          if(role === 'teacher'){
            uploadScreen.push(<AppDragDropDemo2 appContext={self.props.appContext} role={self.state.loginRole} name={self.state.username}/>)
            self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
          } else if(role === 'student6'){
            uploadScreen.push(<AppDragDropDemo appContext={self.props.appContext} role={self.state.loginRole} name={self.state.username}/>)
            self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
          }else{
            uploadScreen.push(<AppDragDropDemo1 appContext={self.props.appContext} role={self.state.loginRole} name={self.state.username}/>)
            self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
          }
  
         console.log("Login successfull");
         var uploadScreen=[];
         uploadScreen.push(<Landing appContext={self.props.appContext} role={self.state.loginRole} name={self.state.username}/>)
         self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
       }
       else if(response.data.code == 204){
         console.log("Username password do not match");
      var loginRole;
      if(value==1){
        var localloginComponent=[];
        loginRole='student';
        loginRole='student1';
        localloginComponent.push(
          <MuiThemeProvider>
            <div>
             <TextField
               hintText="Enter your College Rollno"
               hintText="Enter your Student Id"
               floatingLabelText="Student Id"
               onChange = {(event,newValue) => this.setState({username:newValue})}
               />
                 onChange = {(event,newValue) => this.setState({password:newValue})}
                 />
               <br/>
               <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
               <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event, loginRole)}/>
           </div>
           </MuiThemeProvider>
        )
          <MuiThemeProvider>
            <div>
             <TextField
               hintText="Enter your College Rollno"
               hintText="Enter your Student Id"
               floatingLabelText="Teacher Id"
               onChange = {(event,newValue) => this.setState({username:newValue})}
               />
                 onChange = {(event,newValue) => this.setState({password:newValue})}
                 />
               <br/>
               <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
               <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event, loginRole)}/>
           </div>
           </MuiThemeProvider>
        )
      }
  
    else if(value == 2){
      var localloginComponent=[];
      loginRole='teacher';
      localloginComponent.push(
        <MuiThemeProvider>
          <div>
           <TextField
             hintText="Enter your College Rollno"
             floatingLabelText="Teacher Id"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
      )
    }
    this.setState({menuValue:value,
                   loginComponent:localloginComponent,
                   longinRole:loginRole})
  }
  render() {
    return (
      <div className='sajjan'>
        <MuiThemeProvider>
        <AppBar
             title="Login"
           />
        </MuiThemeProvider>
        <MuiThemeProvider>
        <div>
        <p>Login as:</p>
        <DropDownMenu value={this.state.menuValue} onChange={(event,index,value)=>this.handleMenuChange(value)}>
          <MenuItem value={1} primaryText="Student" />
          <MenuItem value={2} primaryText="Teacher" />
        </DropDownMenu>
        </div>
        </MuiThemeProvider>
        {this.state.loginComponent}
      </div>
    );
  }
}

const style = {
  margin: 15,
};

export default Login;
