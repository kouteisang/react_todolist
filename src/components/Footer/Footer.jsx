import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Footer.css'
export default class Footer extends Component {

    static propTypes = {
        deleteAllFinish: PropTypes.func.isRequired
    }

    handleFinish = (event)=>{
        const {finishAllTodo} = this.props
        finishAllTodo(event.target.checked)
    }

    handleDeleteAllFinish = (event)=>{
        const {deleteAllFinish} = this.props
        if(window.confirm('确定清除已完成任务吗？')){
            deleteAllFinish()
        }
    }

    render() {
        const {todos} = this.props
        const done = todos.reduce((preValue, currentValue)=>{
            return preValue + (currentValue.done === true)
        }, 0)
        const all = todos.length
        return (
            <div className='foot-wrapper'>
                <label>
                    <input type="checkbox" checked={done === all && all !== 0} onChange={this.handleFinish}/>
                    <span>
                        已完成 {done} / 全部 {all}
                    </span>
                </label>
                <button onClick={this.handleDeleteAllFinish}>清除已完成任务</button>
            </div>
        )
    }
}
