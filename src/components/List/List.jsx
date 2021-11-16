import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item/Item'
import './List.css'

export default class List extends Component {

    static propTypes = {
        deleteTodo: PropTypes.func.isRequired,
        updateTodo: PropTypes.func.isRequired
    }

    render() {
        const {todos, deleteTodo, updateTodo} = this.props
        return (
            <div className='list-container'>
                {
                    todos.map((todo)=>{
                        return <Item key = {todo.id} {...todo} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
                    })
                }
            </div>
        )
    }
}
