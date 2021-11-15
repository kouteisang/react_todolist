import React, { Component } from 'react'
import './Header.css'
export default class Header extends Component {
    render() {
        return (
            <div className='header-container'>
                <input placeholder='请输入你的任务名称，按回车键确认' type="text"/>
            </div>
        )
    }
}
