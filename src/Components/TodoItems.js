import React, { Component } from "react";
import ListItem from './ListItem';

export default class TodoItems extends Component {
    deleteHandler = (key) => {
        const { onDelete } = this.props;

        if(onDelete) onDelete (key);
    }

    render(){
        const { entries } = this.props;

        return (
            <ul className="theList">
                {entries.map(entry => {
                    return (
                        <ListItem item={entry} key={entry.key} onDelete={this.deleteHandler} />
                    )
                })}
            </ul>
        )
    }
}
