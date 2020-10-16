import React, { Component } from "react";
import PropTypes from 'prop-types';
// import PropTypes from 'prop-types';

export default class ListItem extends Component {
    static propTypes = {
        item: PropTypes.object.isRequired,
        onDelete: PropTypes.func.isRequired,
        editMode: PropTypes.bool,

    }

    static defaultProps = {
        editMode: true,
    }

    // You can use state on the list item component itself or you can use the props method above.

    state = {
        editMode: false,
        textValue: this.props.item.text,
    }

    inputRef = React.createRef();

    editHandler = () => {
        const { item, onEditClick } = this.props;

        // We propagate upwards to the parent that the item were working with will be in edit mode.
        if(onEditClick) onEditClick(item.key);

        // Or we can use state on the list item component itself to determine if it is in edit mode.
        this.setState({
            editMode: true
        })
    }

    saveHandler = () => {
        const { item, onSave } = this.props;
        const newText = this.inputRef.current;
        debugger;
        // We propagate upwards to the parent that the item were working on will have new text set.
        if(onSave) onSave(item, newText);

        // And we also need to turn off the edit mode if were using the component state.
        this.setState({
            editMode: false
        })
    }

    deleteHandler = () => {
        const { onDelete, item } = this.props;
        if (onDelete) onDelete(item.key);
    }

    clickHandler = () => {

    }

    render() {
        const { item, } = this.props;
        const { editMode, textValue } = this.state;

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
                                <input type='checkbox' />

                                {editMode ? <input type="text" value={textValue} ref={this.inputRef} /> : item.text}
                            </span>
                        </dt>
                    </dl>
                </li>
                <div className='buttons'>
                    <button type="button" className="btn" onClick={this.editHandler}>
                        Edit
            </button>
                    {editMode && <button type="button" className="btn" onClick={this.saveHandler}>Save</button>}
                </div>
            </>
        )
    }
}