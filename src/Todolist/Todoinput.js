import React, { Component } from 'react'
import './todo.css';

export default class Todoinput extends Component {
    handleInput = (e)=>{
        if(e.keyCode === 13 && e.target.value !== ''){
            this.props.add(e.target.value);
            e.target.value = '';
        } 
    }
    render() {
        return (
            <div>
                <div className='topdiv'>
                    <div className='top'>
                        <div className='sp' >ToDoList</div>
                        <input type="text" onKeyDown={this.handleInput} className='in' placeholder="添加ToDo" />
                    </div>
                    
                </div>
            </div>
        )
    }
}