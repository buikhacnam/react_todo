import React, { Component } from 'react';
import Header from "./components/layout/Header"
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import {v4 as uuid} from "uuid";
import './App.css';


class App extends Component {
  state = {
    todos: [
      {
        id: uuid(),
        title: "smoke some weed",
        completed: false
      },
      {
        id: uuid(),
        title: "fuck that chick",
        completed: false
      },
      {
        id: uuid(),
        title: "finish that whiskey bottle",
        completed: false
      }
    ]
  }
  
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
        //todo.completed = todo.completed ? false : true;
      }
      return todo;
    }) });
  }

  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => {
     return todo.id !== id;
    })]})
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });

  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
        </div>
      </div>
    )
  }
}

export default App;
