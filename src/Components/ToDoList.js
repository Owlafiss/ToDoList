import React, { Component } from "react";
import "../TodoList.css";
import Form from "./Form";
import TodoItems from "./TodoItems";


class TodoList extends Component {
    constructor(props){
        super(props);

        this.state = {
            items: [],
        }
    }

    deleteItem = (key) => {
        var filteredItems = this.state.items.filter(function(item){
            return (item.key !== key)
        });
        
        this.setState({
            items: filteredItems,
        }, () => { console.log(this.state.items)});
    }
    
    render(){
        return (
            <div className="todoListMain">
                <Form />
                <TodoItems entries={this.state.items} 
                           onDelete={this.deleteItem}/>
            </div>
        )
    }
}

export default TodoList;
