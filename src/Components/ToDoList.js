import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "../TodoList.css";

class TodoList extends Component {
constructor (props){
    super(props);

    this.state = {                                     // setting constructor for the state
        items: []
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);        
}

addItem(e){
    if (this._inputElement.value !== ""){              // creating the item
        var newItem = {                             
            text: this._inputElement.value,         
            key: Date.now()                            // since we deal with array, we need a key for every element of the array
        };

        this.setState ((prevState) => {                //fit the state of the array to have the new value inside it
            return {
                items: prevState.items.concat(newItem)
            };
        });
    }


    this._inputElement.value = "";          // once the value is submitted, clear out the input

    console.log(this.state.items);

    e.preventDefault();                     // preventing the page to reload 
}

deleteItem(key) {
    var filteredItems = this.state.items.filter(function(item){
        return (item.key !== key)
    });

    this.setState({
        items: filteredItems,

        
    });
    console.log(filteredItems);
}

    render(){
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a}  // making local variable with ref so we can use it to add it to the array
                                placeholder="enter task">
                        </input>
                        <button type="submit">add</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items} 
                            delete={this.deleteItem}/>
            </div>
        )
    }
}

export default TodoList;
