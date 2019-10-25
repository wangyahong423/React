import React, { Component } from 'react';

export default class Todoing extends Component {
    render() {
        var {todoList} = this.props;
        return (
            <div className='ing'>
                <h2 style={{position:'relative'}}>正在进行<span>{this.props.doing}</span></h2>
                <ul>{
                    todoList.map((item, index) => {
                        if (item.done === false) {
                            return (
                                <li key={index}>
                                    <input type="checkbox" onClick={()=>this.props.change(index)}/>
                                    <p style={{margin:'0'}}>{item.title}</p>
                                    <a className='lip' onClick={()=>this.props.del(index)}>-</a>
                                </li>
                            )
                        }
                        return '';
                    })
                }
                </ul>
                <h2 style={{position:'relative'}}>已经完成<span>{this.props.done}</span></h2>
                <ul>{
                    todoList.map((item, index) => {
                        if (item.done === true) {
                            return (
                                <li key={index}>
                                    <input type="checkbox" onClick={()=>this.props.change(index)} checked="checked" readOnly/>
                                    <p style={{margin:'0'}}>{item.title}</p>
                                    <a className='lip' onClick={()=>this.props.del(index)}>-</a>
                                </li>
                            )
                        }
                        return '';
                    })
                } 
                </ul>
            </div>
        )
    }
}

