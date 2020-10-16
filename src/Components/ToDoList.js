import React, { Component } from "react";
import "../TodoList.css";
import Form from "./Form";



export default class TodoList extends Component {
    
    render(){
        return (
            <div className="todoListMain">
                <Form />
            </div>
        )
    }
}
