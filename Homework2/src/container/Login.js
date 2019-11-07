import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Login extends Component {
    render() {
        return (
            <div className='content'>
                <div className='panel' style={{'width':'900px','marginTop':'-30px'}}>
                    <div className='header'>
                        <ul className='breadcrumb'>
                            <li>
                                <Link to='/home'>主页</Link>
                                <span className='divider'>/</span>
                            </li>
                            <li className='active'>登录</li>
                        </ul>
                    </div>
                    <div className='inner'>
                        <form id='signin_form' className='form-horizontal' action='/signin' method='post'>
                            <div className='control-group'>
                                <label className='control-label'>用户名</label>
                                <div className='controls'>
                                    <input className='input-xlarge' id='name' name='name' size='30' type='text'></input>
                                </div>
                            </div>
                            <div className='control-group'>
                                <label className='control-label'>密码</label>
                                <div className='controls'>
                                    <input className='input-xlarge' id='pass' name='pass' size='30' type='password'></input>
                                </div>
                            </div>
                            <input type='hidden' name='_csrf' value='tgtMvgVH-zSpM58Wb3657rd1iVHDLzWZOLpI'></input>
                            <div className='form-actions'>
                                <Link to='/home'><input type='submit' className='span-primary' value='登录'></input></Link>
                                {/* <a href='/auth/github'> */}
                                    <Link to='/home'><span className='span-info' style={{'marginLeft':'10px'}}>通过GitHub登录</span></Link>
                                {/* </a> */}
                                <a id='forgot_password' href='/search_pass'>忘记密码？</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
