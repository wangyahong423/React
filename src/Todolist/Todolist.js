import React, { Component } from 'react';
import Todoinput from './Todoinput';
import Todoing from './Todoing';

export default class Todolist extends Component {
    constructor(){
        super();
        //首先获取localStorage，并将其转换为对象
        let todo = JSON.parse(localStorage.getItem('todo'));
        if(todo === null){
            //未存入数据时
            this.state = {
                todoList: []
            }
        }
        else{
            //存入数据
            this.state = {
                todoList: todo
            }
        }
    } 

    addItem = (data) => {
        console.log(data);
        let todo = {"title":data,"done":false}
        this.setState({
            todoList: [...this.state.todoList,todo]
        })
    }
    delItem = (index) => {
        let todoList = [...this.state.todoList];
        todoList.splice(index,1);
        this.setState({
            todoList: todoList
        })
    }
    changeItem = (index) => {
        let todoList = [...this.state.todoList];
        if(todoList[index].done === false){
            todoList[index].done=true;
        }
        else{
            todoList[index].done=false;
        }
        this.setState({
            todoList:todoList
        })
    }
    
    render() {
        // 先更新localStorage
        localStorage.setItem('todo',JSON.stringify(this.state.todoList));
        //设置一个变量接收正在进行的个数:
        let doing = 0;
        //设置一个变量接收已经完成的个数:
        let done = 0;
        //获取当前状态下，正在进行和已经完成的个数：通过遍历todoList，访问todoList中每个元素的done值来进行计数
        this.state.todoList.forEach(item => {
            if(item.done == false){
                doing = doing + 1;
            }
            else {
                done = done + 1;
            }
        });

        return (
            <div>
                <Todoinput add={this.addItem}/>
                <Todoing del={this.delItem} change={this.changeItem} todoList={this.state.todoList} doing={doing} done={done}/>
            </div>
        )
    }
} 
