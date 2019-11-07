import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div id='footer' style={{'marginTop':'1620px'}}>
                <div id='footer_main' style={{'marginLeft':'160px'}}>
                    <div className='links'>
                        <a className='dark' href='/rss'>RSS</a>
                        <a className='dark' href="https://github.com/cnodejs/nodeclub/">源码地址</a>
                    </div>
                    <div className='col_fade'>
                        <p>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
                        <p>
                            服务器赞助商为
                            <a href="http://www.ucloud.cn/?utm_source=zanzhu&utm_campaign=cnodejs&utm_medium=display&utm_content=yejiao&ytag=cnodejs_logo" target="_blank" className="sponsor_outlink" data-label="ucloud_bottom">
                                <img src="//static.cnodejs.org/FuIpEaM9bvsZKnQ3QfPtBHWQmLM9" title="ucloud" alt="ucloud" width="92px"></img>
                            </a>
                            存储赞助商为
                            <a href="http://www.qiniu.com/?ref=cnode" target="_blank" className="sponsor_outlink" data-label="alinode_bottom">
                                <img src="//static.cnodejs.org/FpMZk31PDyxkC8yStmMQL4XroaGD" title="alinode" alt="alinode" height="54px" width='166px'></img>
                            </a>
                            提供应用性能服务。
                        </p>
                        <p>
                            新手搭建Node.js服务器，推荐使用无需备案的
                            <a href="https://www.digitalocean.com/?refcode=eba02656eeb3"> DigitalOcean(https://www.digitalocean.com/)</a>
                        </p>
                    </div>
                </div>
                <div id="sidebar-mask"></div>
            </div>
        )
    }
}
