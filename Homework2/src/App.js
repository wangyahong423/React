import React, { Component } from 'react';
import Header from './components/Header';
import {BrowserRouter as Router,Route,Redirect} from 'react-router-dom';
import Home from './container/Home';
import Api from './container/Api';
import Start from './container/Start';
import About from './container/About';
import Login from './container/Login';
import Details from './container/Details';
import Footer from "./components/Footer"

export default class App extends Component {
    render() {
        return (
            <Router>
                <div className='navbar'>
                    <Header />
                </div>
                <div className='content'>
                    <div className='left'>
                        <Route path='/home' component={Home} />
                        <Route path='/details/:id' component={Details} />
                        <Route path='/start' component={Start} />
                        <Route path='/api' component={Api} />
                        <Route path='/about' component={About} />
                        <Route path='/login' component={Login} />
                    </div>
                    <div className='right'>
                        <div className='panel'>
                            <div className='inner'>
                                <p>CNode：Node.js专业中文社区</p>
                                <div>您可以<a href="/login">登陆</a>或<a>注册</a>，也可以<a href="/auth/github"><span className='span-info'>通过GitHub登陆</span></a></div>
                            </div>
                        </div>
                        <div className='panel'>
                            <div className='inner ads'>
                                <a href="https://www.ucloud.cn/site/active/gift.html?utm_source=cnodejs&utm_medium=content_pic_pc_540_130&utm_campaign=huodong&utm_content=gift&ytag=cnodejs" target='_blank' className='banner sponsor_outlink' data-label='ucloud-banner'>
                                    <img src="//static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS"></img>
                                </a>
                                <div className='sep10'></div>
                                <a href="https://www.qiniu.com/events/cdn-package?code=cnode" target='_blank' className='banner sponsor_outlink' data-label='qiniu-sidebar'>
                                    <img src="//static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS"></img>
                                </a>
                                <div className='sep10'></div>
                                <a href="https://www.aliyun.com/product/nodejs?ref=cnode" target='_blank' className='banner sponsor_outlink' data-label='alinode'>
                                    <img src="//static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_"></img>
                                </a>
                            </div>
                        </div>
                        <div className='panel'>
                            <div className='header'>
                                <span className='col_fade'>无人回复的话题</span>
                            </div>
                            <div className='inner'>
                                <ul className='unstyled'>
                                    <li>
                                        <div><a className='dark topic_title' href="/topic/5dc007a9ece3813ad9ba6400" title="一种支持插件式开发的命令行工具开发模式">一种支持插件式开发的命令行工具开发模式</a></div>
                                    </li>
                                    <li>
                                        <div><a className='dark topic_title' href="/topic/5dbfe24e865a9844a301fc51" title="请问缓存的内存模型是什么呢">请问缓存的内存模型是什么呢</a></div>
                                    </li>
                                    <li>
                                        <div><a className='dark topic_title' href="/topic/5dbea628865a9844a301f8d2" title="Hackers周刊第十期（2019-11-03）">Hackers周刊第十期（2019-11-03）</a></div>
                                    </li>
                                    <li>
                                        <div><a className='dark topic_title' href="/topic/5dbe83cd865a9844a301f894" title="写了个在测试中，控制函数日志打印的npm包">写了个在测试中，控制函数日志打印的npm包</a></div>
                                    </li>
                                    <li>
                                        <div><a className='dark topic_title' href="/topic/5dbe64daece3813ad9ba5f2b" title="libuv的定时器原理源码解析">libuv的定时器原理源码解析</a></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='panel'>
                            <div className='header'>
                                <span className='col_fade'>积分榜</span>
                                &nbsp;
                                <a className='dark' href='/users/top100'>TOP 100 >></a>
                            </div>
                            <div className='inner'>
                                <ol>
                                    <li>
                                        <span className='top_score'>21745</span>
                                        <span className='user_name'><a href='/user/i5ting'>i5ting</a></span>
                                    </li>
                                    <li>
                                        <span className='top_score'>15675</span>
                                        <span className='user_name'><a href="/user/alsotang">alsotang</a></span>
                                    </li>
                                    <li>
                                        <span className='top_score'>9350</span>
                                        <span className='user_name'><a href='/user/leapon'>leapon</a></span>
                                    </li>
                                    <li>
                                        <span className='top_score'>9120</span>
                                        <span className='user_name'><a href='/user/atian25'>atian25</a></span>
                                    </li>
                                    <li>
                                        <span className='top_score'>8780</span>
                                        <span className='user_name'><a href='/user/jiyinyiyong'>jiyinyiyong</a></span>
                                    </li>
                                    <li>
                                        <span className='top_score'>7335</span>
                                        <span className='user_name'><a href='/user/yakczh'>yakczh</a></span>
                                    </li>
                                    <li>
                                        <span className='top_score'>6825</span>
                                        <span className='user_name'><a href='/user/im-here'>im-here</a></span>
                                    </li>
                                    <li>
                                        <span className='top_score'>6095</span>
                                        <span className='user_name'><a href='/user/DevinXian'>DevinXian</a></span>
                                    </li>
                                    <li>
                                        <span className='top_score'>5815</span>
                                        <span className='user_name'><a href='/user/chapgaga'>chapgaga</a></span>
                                    </li>
                                    <li>
                                        <span className='top_score'>8350</span>
                                        <span className='user_name'><a href='/user/magicdawn'>magicdawn</a></span>
                                    </li>
                                    
                                </ol>
                            </div>
                        </div>
                        <div className='panel'>
                            <div className='header'>
                                <span className='col_fade'>友情社区</span>
                            </div>
                            <div className='inner'>
                                <ol className="friendship-community">
                                    <li>
                                        <a href="https://ruby-china.org/" target='_blank'>
                                            <img src="//static2.cnodejs.org/public/images/ruby-china-20150529.png"></img>
                                        </a>
                                    </li>
                                    <div className='sep10'></div>
                                    <li>
                                        <a href="http://golangtc.com/" target='_blank'>
                                            <img src="//static2.cnodejs.org/public/images/golangtc-logo.png"></img>
                                        </a>
                                    </li>
                                    <div className='sep10'></div>
                                    <li>
                                        <a href="http://phphub.org/" target='_blank'>
                                            <img src="//static2.cnodejs.org/public/images/phphub-logo.png"></img>
                                        </a>
                                    </li>
                                    <div className='sep10'></div>
                                    <li>
                                        <a href="https://testerhome.com/" target='_blank'>
                                            <img src="//static.cnodejs.org/FjLUc7IJ2--DqS706etPQ1EGajxK"></img>
                                        </a>
                                    </li>
                                </ol>
                            </div>
                        </div>
                        <div className='panel'>
                            <div className='header'>
                                <span className='col_fade'>客户端二维码</span>
                            </div>
                            <div className='inner cnode-app-download'>
                                <img width='200' src="//static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU"></img>
                                <br />
                                <a href="https://github.com/soliury/noder-react-native" target='_blank'>客户端源码地址</a>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </Router>
        )
    }
}
