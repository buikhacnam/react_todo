import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./components/layout/Header"
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import About from "./components/pages/About";  
import Footer from "./components/layout/Footer"
import {v4 as uuid} from "uuid";
import './App.css';


class App extends Component {
  state = {
    todos: [
      {
        id: uuid(),
        title: "smoke some weed",
        completed: false,
        changeColor:false
      },
      {
        id: uuid(),
        title: "fuck that chick",
        completed: false,
        changeColor:false
      },
      {
        id: uuid(),
        title: "finish that whiskey bottle",
        completed: false,
        changeColor:false
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

  changeColor = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.changeColor = !todo.changeColor;
      }
      return todo;
    })})
  }
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} changeColor={this.changeColor}/>
              </React.Fragment>
            )} />

            <Route path="/about" component={About} />
            <Footer />
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
