import React, { Component } from 'react'
import PropTypes from "prop-types";
export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: "#f4f4f4",
            padding: "10px",
            borderBottom: "1px #ccc dotted",
            textDecoration: this.props.todo.completed ? "line-through" : "none"
        }
    }
    
    render() {
        const { id, title } = this.props.todo;
        // id(title) = this.props.todo.id(title)
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox"  onChange={this.props.markComplete.bind(this,id)} /> {" "}
                    { title }
                    <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>x</button>
                </p>
            </div>
        )
    }
}

//PropTypes:
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
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
