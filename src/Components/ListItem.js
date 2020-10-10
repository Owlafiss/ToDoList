import React, { Component } from "react";
// import PropTypes from 'prop-types';

export default class ListItem extends Component {
    /*static propTypes = {
        // If you had proptypes you would define them here.
        item: PropTypes.object.isRequired,
        onDelete: PropTypes.func.isRequired,
    }*/



    deleteHandler = () => {
        const { onDelete, item } = this.props;
        if (onDelete) onDelete(item.key);
    }

    clickHandler = () => {
        
    }

    render(){
        const { item} = this.props;
        
        return (
             <>
             <input type='checkbox' />
                <li onDoubleClick={this.deleteHandler}
                        key={item.key}>{item.text}
                </li>
            <button type="button" className="btn">
              Edit
            </button>
            </>
        )
    }
}