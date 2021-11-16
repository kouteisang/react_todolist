import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Item.css'
export default class Item extends Component {

    state = {flag:false}

    static propTypes = {
        deleteTodo: PropTypes.func.isRequired,
        updateTodo: PropTypes.func.isRequired
    }

    handleMouse = (flag)=>{
        return ()=>{
            this.setState({flag:flag})
        }
    }

    handleDelete = (id)=>{
        return ()=>{
            const {deleteTodo} = this.props
            if(window.confirm("你确定要删除吗？")){
                deleteTodo(id)
            }
        }
    }

    handleChange = (id)=>{
        return (event)=>{
            const {updateTodo} = this.props
            updateTodo(id, event.target.checked)
        }
    }

    render() {
        const {id, name, done} = this.props
        const {flag} = this.state
        return (
            <div>
                <li style={{backgroundColor: flag ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)}  onMouseLeave={this.handleMouse(false)}>
                    <label>
                        <input type="checkbox" checked={done} onChange={this.handleChange(id)}/>
                        <span>{name}</span>
                    </label>
                    <button onClick={this.handleDelete(id)}  style={{display: flag ? 'block' : 'none'}}>删除</button>
                </li>
            </div>
        )
    }
}
