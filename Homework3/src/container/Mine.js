import React, { Component } from 'react';
import { NavBar, Icon, Tabs ,Carousel} from 'antd-mobile';

export default class Mine extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#3fcccb', color: '#fff',position:'sticky ',top:'0',zIndex:11111111 }}
                    rightContent={[
                        <i style={{ fontSize: 22, lineHeight: '22px', marginRight: '8px' }} className='iconfont icon-shezhi'></i>
                    ]}
                >我的</NavBar>
            </div>
        )
    }
}