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

export default class AppDragDropDemo extends Component {
    
    global = 0;

    mState = {
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
    
    state = {
        tasks: [
            
          ]
    }
    
        onDragStart = (ev, id, cat, pId) => {
        console.log('dragstart:',id);
        ev.dataTransfer.setData("id", id);
        ev.dataTransfer.setData("category", cat);
        ev.dataTransfer.setData("pId", pId);
    }
        
        onDragOver = (ev) => {
        ev.preventDefault();
    }
        
        onDrop = (ev, cat) => {
        
        let id = ev.dataTransfer.getData("id");
        let category = ev.dataTransfer.getData("category");
        let pId = ev.dataTransfer.getData("pId");
        // let tasks = this.state.tasks.filter((task) => {
        //     if (task.name == id) {
        //         if(task.category == "wip") {
        //              this.state.tasks.push({name:task.name,category:"complete", bgcolor: task.bgcolor});
        //              //task.category = cat;
        //         }
        //         else {
        //             //  this.state.tasks.pop();
        //             //  task.category = cat;
        //         }
                
        //     }
        //     console.log(task);
        //     return task;
        // });
            if(category == "wip"){
                this.state.tasks.push({name:id,category:"complete", bgcolor: "yellow", pId:this.global});
                this.global++;
            }else{
                console.log("PID----"+pId);
                var tasksU = this.state.tasks;
                for(var i=0; i<tasksU.length; i++){
                    if(tasksU[i].pId == pId){
                        tasksU.splice(i, 1);
                    }
                }

                this.state.tasks = tasksU;
            }
            
                     //task.category = cat;
           
     
 
         this.setState({
            // ...this.state,
             
         });
     }
        //this function contains render features 
        render() {
            //tasks holds arrays of draggable objects according to positions
        var tasks = {
            complete: []
        }

        var mTasks = {
            tasks: []
        }
        var answer = [];
            //For loop checks for object categories and creates array
            this.state.tasks.forEach ((t) => {
            tasks.complete.push(
                <div key={t.name} 
                    onDragStart = {(e) => this.onDragStart(e, t.name, t.category, t.pId)}
                    draggable
                    className="draggable"
                    style = {{backgroundColor: t.bgcolor}}
                >
                    {t.name}
                    
                </div>
            );
            answer.push(t.name);
            console.log("----anssss: "+answer);

        });

        var output = 1;

        console.log("=-------> "+answer.length);
        var i = 0 ;
        var val1 = 0;
        var val2 = 0 ;
        var flag = 0 ;
        var operator ;

       while(i<answer.length)
       {

        console.log("answ valu:: "+answer[i]);
        console.log("answ: "+answer[i] === '+');
        
           val2 = 0 ;  
           
           if(flag == 0)
           {
                    flag = 1;
                    while(i<answer.length && parseInt(answer[i]))
                        {
                            val1 = 10*val1 + parseInt(answer[i]);
                            i++;
                        }
                    console.log("val1 ="+val1);
                    console.log("I11=> "+i);
           }
           if(i >= answer.length)
           {
               output = val1;
               console.log("I22=> "+i);
               break;
           }

           var operator = answer[i++]
           
           if(i == answer.length)
           {
               output = val1;
               console.log("I33=> "+i);
               break;
           }

           while(i < answer.length && parseInt(answer[i]))
           {
               val2 = 10*val2 + parseInt(answer[i]);
               console.log("I44=> "+i);
               i++;
           }
           
           if(operator == '+')
           {
               output = val1 + val2;
           }
        else if(operator == '-')
        {
            output = val1 - val2;
        }
        else if(operator == '/')
        {
        if(val2 == 0)
        alert("Can not divide by zero. Undefine !!!");
        else 
        output = val1 / val2;
        }
        else if(operator == 'X')
        {
        output = val1 * val2;
        }
        val1 =  output;

        
        console.log("I55=> "+i);
        console.log("alsdjflskdf - > > > > "+output);
       }

        this.mState.tasks.forEach ((t) => {
            mTasks.tasks.push(
                <div key={t.name} 
                    onDragStart = {(e) => this.onDragStart(e, t.name, t.category, t.pId)}
                    draggable
                    className="draggable"
                    style = {{backgroundColor: t.bgcolor}}
                >
                    {t.name}
                </div>
            );
        });

       

        // for(var i=0; i<answer.length; i++){
        //     if(parseInt(answer[i])!=NaN){
        //         finAns = 10*finAns + parseInt(answer[i]);
        //     } else{
        //         op1 = finAns;
        //         finAns = 0;
        //     }
        // }

             //Return or display function for rendering function is implemented 
             return (
            <div className="container-drag">
                <h2 className="header">EduMath</h2>
                <div className="wip"
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>{this.onDrop(e, "wip")}}>
                    <span className="task-header">OPERATORS</span>
                    {mTasks.tasks}
                </div>
             <div className="droppable" 
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>this.onDrop(e, "complete")}>
                     <span className="task-header">SANDBOX</span>
                     {tasks.complete}
                </div>
            <div className="answer">
                {output}
            </div>

            </div>
        );
    }
        
   }
