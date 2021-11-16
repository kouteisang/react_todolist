import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import './Header.css'
export default class Header extends Component {

    //对接收的props进行类型必要的限制
    static propTypes = {
        addTodo : PropTypes.func.isRequired
    }

    handleKeyUp = (event)=>{
        //keyCode = 13为回车键
        //target为输入的内容
        const {keyCode, target} = event
        if(keyCode === 13){
            if(target.value === ''){
                window.alert('任务名称不能为空！')
                return ;
            }
            const {addTodo} = this.props
            const todo = {id:nanoid(), name:target.value, done:false}
            addTodo(todo)
        }
        return ;
    }

    render() {
        return (
            <div className='header-container'>
                <input onKeyUp={this.handleKeyUp} placeholder='请输入你的任务名称，按回车键确认' type="text"/>
            </div>
        )
    }
}
