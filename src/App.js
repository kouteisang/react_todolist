import React, { Component } from 'react'
import Header from './components/Header/Header';
import List from './components/List/List';
import Footer from './components/Footer/Footer';
import './App.css'

export default class App extends Component {

  state = {todos:[
    {id:'1', name:'吃饭', done:true},
    {id:'2', name:'睡觉', done:false}
  ]}

  addTodo = (todo)=>{
    const {todos} = this.state
    const newTodos = [ todo , ...todos]
    this.setState({todos:newTodos})
  }

  deleteTodo = (id)=>{
    const {todos} = this.state
    const newTodos = todos.filter((todo)=>{
      return todo.id !== id
    })
    this.setState({todos:newTodos})
  }

  updateTodo = (id, done)=>{
    const {todos} = this.state
    const newTodos = todos.map((todoObj)=>{
      if(todoObj.id === id){
        return {...todoObj, done:done}
      }else {
        return todoObj
      }
    })
    this.setState({todos:newTodos})
  }

  finishAllTodo = (done)=>{
    const {todos} = this.state
    const newTodos = todos.map((todoObj)=>{
      return {...todoObj, done:done}
    })
    this.setState({todos:newTodos})
  }

  deleteAllFinish = ()=>{
    const {todos} = this.state
    const newTodos = todos.filter((todoObj)=>{
      return todoObj.done === false
    })
    console.log(newTodos)
    this.setState({todos:newTodos})
  }

  render() {
    const {todos} = this.state
    return (
      <div className='todo-container'>
        <Header addTodo = {this.addTodo}/>
        <List todos = {todos} deleteTodo = {this.deleteTodo} updateTodo = {this.updateTodo}/>
        <Footer todos = {todos} finishAllTodo = {this.finishAllTodo} deleteAllFinish = {this.deleteAllFinish}/>
      </div>
    )
  }
}
