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


export default class AppDragDropDemo extends Component { //For lower class students

    precedence = (op) => { 
        if(op === '+'||op === '-') 
        return 1; 
        if(op === '*'||op === '/') 
        return 2; 
        return 0; 
    } 
      
    // Function to perform arithmetic operations. 
     applyOp = (a, b, op) => { 
        switch(op)
        { 
            case '+': return a + b; 	
            case '-': return a - b; 
            case '*': return a * b; 
            case '/': return a / b; 
        } 
    } 
      
    // Function that returns value of 
    // expression after evaluation. 
    evaluate =(tokens) =>
    { 
       // tokens.replace(/\s/g, '');
        var i; 
        // stack to store integer values. 
         var values = [];
          
        // stack to store operators. 
        //stack <char> ops;
        var ops = [];
    
        for(i = 0; i < tokens.length; i++)
        { 
             if(tokens[i] == ' ') 
                continue; 
    
            else if(tokens[i] == '+' || tokens[i] == '-' || tokens[i] == '/' || tokens[i] == '*')
            { 
    
                // While top of 'ops' has same or greater  
                // precedence to current token, which 
                // is an operator. Apply operator on top  
                // of 'ops' to top two elements in values stack. 
                while(ops.length > 0 && (this.precedence(ops[ops.length-1]) >= this.precedence(tokens[i])))
                 { 
                    var a = values.pop(); 
                    var b = values.pop(); 
                    var o = ops.pop(); 
                    values.push(this.applyOp(b, a, o)); 
                } 
                  
                // Push current token to 'ops'. 
                ops.push(tokens[i]); 
            } 
            // Current token is an opening  
            // brace, push it to 'ops' 
            else if(tokens[i] == '(')
            { 
                ops.push(tokens[i]); 
            } 
            
            // Current token is a number, push  
            // it to stack for numbers. 
            else if(tokens[i] >= '0'  && tokens[i] <= '9')
            {   
                var val = 0; 
                // There may be more than one 
                // digits in number. 
                while(i < tokens.length &&  tokens[i] >= '0'  && tokens[i] <= '9') 
                { 
                    val = (val*10) + (tokens[i]-'0'); 
                    i++; 
                } 
                i--;
                values.push(val); 
            } ///
              
            // Closing brace encountered, solve  
            // entire brace. 
            else if(tokens[i] == ')' ) 
            { 
                while(ops.length > 0 && ops[ops.length-1] != '(') 
                { 
                    var val2 = values.pop(); 
                    var val1 = values.pop(); 
                    var op = ops.pop(); 
                    values.push(this.applyOp(val1, val2, op)); 
                } 
                // pop opening brace. 
                if(ops.length > 0) 
                   ops.pop(); 
            }
            
        } 
          
        // Entire expression has been parsed at this 
        // point, apply remaining ops to remaining 
        // values. 
        while(ops.length > 0)
        { 
            var p = values.pop(); 
            var q = values.pop(); 
            var oo = ops.pop(); 
            values.push(this.applyOp(q, p, oo)); 
        } 
        
        // Top of 'values' contains result, return it. 
        return values[values.length-1]; 
    } 

    global = 0;
    mState = {
        tasks: [
            {name:"1", category:"wip", bgcolor:"skyblue"},
            {name:"2", category:"wip", bgcolor:"skyblue"},
            {name:"3", category:"wip", bgcolor:"skyblue"},
            {name:"4", category:"wip", bgcolor:"skyblue"},
            {name:"5", category:"wip", bgcolor:"skyblue"},
            {name:"6", category:"wip", bgcolor:"skyblue"},
            {name:"7", category:"wip", bgcolor:"skyblue"},
            {name:"8", category:"wip", bgcolor:"skyblue"},
            {name:"9", category:"wip", bgcolor:"skyblue"},
            {name:"0", category:"wip", bgcolor:"skyblue"},
            {name:"+", category:"wip", bgcolor:"yellow"},
            {name:"-", category:"wip", bgcolor:"yellow"},
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

        var outputValue  = this.evaluate(answer);
        
        // var currentIndex = 0 ;
        // var operandFirst = 0;
        // var operandSecond = 0 ;
        // var isFirstCalculated = 0 ;
        // var mathematicalOperator ;

        
        // if(answer[answer.length-1] != '+' && answer[answer.length-1] != '-' && answer[answer.length-1] != '/' && answer[answer.length-1] != 'X'){
        //     var answerStrVal = answer.toString();
        //     console.log("============"+answerStrVal);
        //     outputValue = eval(answerStrVal.replace(/,/g,''));
        // }
        // else 
        // outputValue = answer ; 

        // console.log("outputValue = " + outputValue);

    //    if(answer[answer.length-1] == '+'  || answer[answer.length-1] == '-' || answer[answer.length-1] == '/' || answer[answer.length-1] == 'X')
    //    {
    //        outputValue = "Invalid Formate"
    //    } 
    //    else 
    //    {
    //     while(currentIndex<answer.length)
    //     {
    //        operandSecond = 0 ;  
    //        if(isFirstCalculated == 0)
    //        {
    //                 isFirstCalculated = 1;
    //                 while(currentIndex<answer.length && answer[currentIndex] >= '0' && answer[currentIndex] <= '9')
    //                     {
    //                         operandFirst = 10*operandFirst + parseInt(answer[currentIndex]);
    //                         currentIndex++;
    //                     }
    //        }
    //        if(currentIndex >= answer.length)
    //        {
    //            outputValue = operandFirst;
    //            break;
    //        }

    //        var mathematicalOperator = answer[currentIndex++]
    //        if(answer[currentIndex] < '0' || answer[currentIndex] > '9')
    //        {
    //            alert("You can not use two operator together\n Please bring it back to its original place !!!");
    //        }
    //        if(currentIndex == answer.length)
    //        {
    //            outputValue = operandFirst;
    //            break;
    //        }

    //         while(currentIndex < answer.length && answer[currentIndex] >= '0' && answer[currentIndex] <= '9')
    //         {
    //            operandSecond = 10*operandSecond + parseInt(answer[currentIndex]);
    //            currentIndex++;
    //         }
    //         if(mathematicalOperator == '+')
    //         {
    //            outputValue = operandFirst + operandSecond;
    //         }
    //         else if(mathematicalOperator == '-')
    //         {
    //         outputValue = operandFirst - operandSecond;
    //         }
    //         else if(mathematicalOperator == '/')
    //         {
    //         if(operandSecond == 0)
    //         alert("Can not divide by zero. Undefine !!!");
    //         else 
    //         outputValue = operandFirst / operandSecond;
    //         }
    //         else if(mathematicalOperator == 'X')
    //         {
    //         outputValue = operandFirst * operandSecond;
    //         }
    //         operandFirst =  outputValue;
    //         }
    // }

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
                    <span className="task-header"><pre>numbers                      Operators</pre></span>
                    {mTasks.tasks}
                </div>
             <div className="droppable" 
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>this.onDrop(e, "complete")}>
                     <span className="task-header">Sandbox</span>
                     {tasks.complete}
                </div>
            <div className="answer">
            <span className="task-header">Result</span>
            <span className="task-header">{outputValue}</span>
                
            </div>
            </div>
        );
    }
        
   }