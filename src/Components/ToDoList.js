import React, { Component } from "react";

import "../TodoList.css";
import Form from "./Form"



class TodoList extends Component {



    render(){
        return (
            <div className="todoListMain">
                <Form />
            </div>
        )
    }
}

export default TodoList;
