import React, { Component } from 'react'
import './Footer.css'
export default class Footer extends Component {
    render() {
        return (
            <div className='foot-wrapper'>
                <label>
                    <input type="checkbox" />
                    <span>
                        已完成 0 / 全部 2
                    </span>
                </label>
                <button>清除已完成任务</button>
            </div>
        )
    }
}
