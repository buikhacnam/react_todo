import React, { Component } from 'react';
import PropTypes from "prop-types";

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: this.props.todo.changeColor ? "red" : "#f4f4f4",
            padding: "10px",
            borderBottom: "1px #ccc dotted",
            textDecoration: this.props.todo.completed ? "line-through" : "none"
        }
    }

    //experiment: 
    onChange = () => {
       return this.props.markComplete(this.props.todo.id);
    }

    changeColor = () => {
        return this.props.changeColor(this.props.todo.id);
    }
    
   
    
    render() {
        const { id, title } = this.props.todo;
        // id(title) = this.props.todo.id(title)
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox"  onChange={this.onChange} /> {" "}
                    <button style={btnStyle} onClick={this.changeColor}>Color</button>
                    { title } 
                    <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>x</button>
                    
                </p>
            </div>
        )
    }
}

//PropTypes:
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

const btnStyle = {
    float: "right",
    padding: "5px 9px",
    backgroundColor: "red",
    color: "white",
    cursor: "pointer",
    borderRadius: "50%",
    outline: "none"
    
}

export default TodoItem 
