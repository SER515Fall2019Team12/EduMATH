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
        //this function contains render features 
        render() {
            //tasks holds arrays of draggable objects according to positions
            var tasks = {
            wip: [],
            complete: []
        }
            //For loop checks for object categories and creates array
            this.state.tasks.forEach ((t) => {
            tasks[t.category].push(
                <div key={t.name} 
                    onDragStart = {(e) => this.onDragStart(e, t.name)}
                    draggable
                    className="draggable"
                    style = {{backgroundColor: t.bgcolor}}
                >
                    {t.name}
                </div>
            );
        });
             //Return or display function for rendering function is implemented 
             return (
            <div className="container-drag">
                <h2 className="header">EduMath</h2>
                <div className="wip"
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>{this.onDrop(e, "wip")}}>
                    <span className="task-header">OPERATORS</span>
                    {tasks.wip}
                </div>
             <div className="droppable" 
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>this.onDrop(e, "complete")}>
                     <span className="task-header">SANDBOX</span>
                     {tasks.complete}
                </div>


            </div>
        );
    }
        
   }
