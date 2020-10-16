import React, { Component } from "react";
import ListItem from './ListItem';

export default class TodoItems extends Component {
    deleteHandler = (key) => {
        const { onDelete } = this.props;

        if(onDelete) onDelete (key);
    }

   /* editHandler = (key, newText) => {
        const editedTaskList = props.items.map(item => {
            if(key === item.key) {
                return {...item, text: newText}
            }
            return item;
        });
        setItems(editedTaskList);
    }*/
    
    /*
    Track the state from Todoitems here. Assign unique IDs to each List item, and then check the array when rendering it
    to see if the item is completed or not.
     */

    render(){
        const { entries } = this.props;
        

        return (
            <ul className="theList">
                {entries.map((entry) => {
                    return (
                        <ListItem 
                        item={entry} 
                        key={entry.key} 
                        isComplete={entry.isComplete} 
                        onDelete={this.deleteHandler}
                        onEdit={this.editHandler} />
                    )
                })}
            </ul>
        )
    }
}