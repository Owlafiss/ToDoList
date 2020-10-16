
import React, { Component } from "react";
import TodoItems from "./TodoItems";



export default class Form extends Component {
    constructor (props){
        super(props);
    
    this.state = {                                     // setting constructor for the state
        items: [],
        }
    };

    addItem = (e) => {
        if (this._inputElement.value !== ""){   
            const initialList = [{                             
                text: this._inputElement.value,         
                key: Date.now(),                            // since we deal with array, we need a key for every element of the array
                isComplete: false,
                
                },
            ];
            this.setState ((prevState) => {                //fit the state of the array to have the new key inside it
                return {
                    items: prevState.items.concat(initialList),
                };
    
            }, () => { console.log(this.state.items)});
        }
        this._inputElement.value = "";          // once the value is submitted, clear out the input
        e.preventDefault();                     // preventing the page to reload 
    }

    deleteItem = (key) => {
        var filteredItems = this.state.items.filter(function(item){
            return (item.key !== key)
        });
        this.setState({
            items: filteredItems,
        }, () => { console.log(this.state.items)});
    }
 
    render () {
        return(
            <div className="header">
                <form onSubmit={this.addItem}>
                    <h1 className="label-wrapper">
                        <label htmlFor="new-todo-input" className="label__lg">
                            What needs to be done?
                        </label>
                    </h1>
                    <input
                        type="text" 
                        id="new-todo-input" 
                        className="input input__lg"
                        name="text"
                        placeholder="Enter new task"
                        ref={(a) => this._inputElement = a} // making local variable with ref so we can use it to add it to the array
                        >
                    </input>
                    <button type="submit" id="add-button">
                        Add
                    </button>
                </form>
                <div className="items">
                <TodoItems entries={this.state.items} 
                           onDelete={this.deleteItem}/>
                </div>
            </div>
        )
    }
}