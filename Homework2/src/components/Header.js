import React from 'react';
import {Link} from 'react-router-dom';

export default function Header(){
    return (
        <div className='header'>
            <header>
                <img className='brand' style={{"width":'220px','marginTop':'5px','marginLeft':'-50px'}} src='https://static2.cnodejs.org/public/images/cnodejs_light.svg'></img>
                <form id='search_form' className='navbar-search' action='/search'>
                    <input style={{'height':'25px','marginBottom':'15px'}} type='text' id='q' name='q' className='search-query span3' ></input>
                </form>
                <div style={{float:'right'}}>
                    <Link to='/home/all/1'>首页</Link>
                    <Link to='/start'>新手入门</Link>
                    <Link to='/api'>API</Link>
                    <Link to='/about'>关于</Link>
                    <Link to=''>注册</Link>
                    <Link to='/login'>登陆</Link>
                </div>
            </header>
        </div>
    )
}