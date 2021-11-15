import React, { Component } from 'react'
import './Item.css'
export default class Item extends Component {
    render() {
        return (
            <div>
                <li>
                    <label>
                        <input type="checkbox" />
                        <span>吃饭</span>
                    </label>
                    <button>删除</button>
                </li>
            </div>
        )
    }
}
