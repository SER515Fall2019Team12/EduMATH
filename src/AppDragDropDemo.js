import React, { Component } from 'react';
import './App.css';

export default class AppDragDropDemo extends Component {
    state = {
        tasks: [
            {name:"1", category:"wip", bgcolor: "skyblue"},
            {name:"2", category:"wip", bgcolor:"skyblue"},
            {name:"3", category:"wip", bgcolor:"skyblue"},
            {name:"4", category:"wip", bgcolor:"skyblue"},
            {name:"5", category:"wip", bgcolor:"skyblue"},
            {name:"X", category:"wip", bgcolor:"yellow"},
            {name:"/", category:"wip", bgcolor:"yellow"},
            {name:"+", category:"wip", bgcolor:"pink"},
            {name:"-", category:"wip", bgcolor:"pink"},
            {name:"6", category:"wip", bgcolor:"skyblue"},
            {name:"7", category:"wip", bgcolor:"skyblue"},
            {name:"8", category:"wip", bgcolor:"skyblue"},
            {name:"9", category:"wip", bgcolor:"skyblue"},
            {name:"0", category:"wip", bgcolor:"skyblue"},
          ]
    }
    
        onDragStart = (ev, id) => {
        console.log('dragstart:',id);
        ev.dataTransfer.setData("id", id);
    }
        
        onDragOver = (ev) => {
        ev.preventDefault();
    }
        
        onDrop = (ev, cat) => {
        
        let id = ev.dataTransfer.getData("id");
        
        let tasks = this.state.tasks.filter((task) => {
            if (task.name == id) {
                if(task.category == "wip") {
                     this.state.tasks.push({name:task.name,category:"wip", bgcolor: task.bgcolor});
                     task.category = cat;
                }
                else {
                     this.state.tasks.pop();
                     task.category = cat;
                }
                
            }
            return task;
        });
 
        this.setState({
             //...this.state,
             //tasks
        });
       
     }
        render() {
        var tasks = {
            wip: [],
            complete: []
        }
        
    }
