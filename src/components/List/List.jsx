import React, { Component } from 'react'
import Item from '../Item/Item'

import './List.css'
export default class List extends Component {
    render() {
        return (
            <div className='list-container'>
                <Item/>

            </div>
        )
    }
}
