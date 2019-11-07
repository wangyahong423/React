import React, { Component } from 'react';
import {Link,Route} from 'react-router-dom';
import All from './All';
import Good from './Good';
import Share from './Share';
import Ask from './Ask';
import Job from './Job';
import Dev from './Dev';

export default class Home extends Component {
    render() {
        let {url} = this.props.match;//获取资源路径的url参数
        console.log(url);
        return (
            <div className='panel'>  
                <div className='header'>
                    <Link className='topic-tab ' to={`${url}/all/1`}>全部</Link>
                    <Link className='topic-tab ' to={`${url}/good/1`}>精华</Link>
                    <Link className='topic-tab ' to={`${url}/share/1`}>分享</Link>
                    <Link className='topic-tab ' to={`${url}/ask/1`}>问答</Link>
                    <Link className='topic-tab ' to={`${url}/job/1`}>招聘</Link>
                    <Link className='topic-tab ' to={`${url}/dev/1`}>客户端测试</Link>
                </div>
                <div>
                    <Route exact path={url}  component={All} />
                    <Route path={`${url}/all/:page`} component={All} />
                    <Route path={url+'/good/:page'} component={Good} />
                    <Route path={url+'/share/:page'} component={Share} />
                    <Route path={url+'/ask/:page'} component={Ask} />
                    <Route path={url+'/job/:page'} component={Job} />
                    <Route path={url+'/dev/:page'} component={Dev} />
                </div>
            </div>
        )
    }
}
