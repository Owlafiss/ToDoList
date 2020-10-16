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
        const {item} = this.props;
        
        return (
             <>
                 <li onDoubleClick={this.deleteHandler} key={item.key}>
                    <dl>
                        <dt>
                            <span
                            style={{
                                textDecoration: item.isComplete
                                ? 'line-through'
                                : 'none',
                            }}>
                                <input type='checkbox'/> {item.text}
                            </span>
                        </dt>
                    </dl> 
                </li>
            <button type="button" className="btn">
              Edit
            </button>
            </>
        )
    }
}