import React, { Component } from 'react'
import { NavBar, Icon,Tabs,Carousel} from 'antd-mobile';

export default class AppHome extends Component {
    render() {
        const tabs = [
            { title: '推荐', sub: '1' },
            { title: '冬季', sub: '2' },
            { title: '宜家', sub: '3' },
            { title: '小清新', sub: '4' },
            { title: '小户型', sub: '5' },
            { title: '个性色彩', sub: '6' }
        ];

        return (
            <div style={{ position: 'relative' }}>
                <NavBar
                    style={{ backgroundColor: '#3fcccb', color: '#fff',position:'sticky ',top:'0',zIndex:11111111 }}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />
                    ]}
                >灵感</NavBar>
                <div style={{ height: 44, width: 45, backgroundColor: '#fff', fontSize: '30px', textAlign: 'center', lineHeight: '45px', zIndex: "99", position: 'absolute', right: '0' }}>+</div>
                <Tabs tabs={tabs}
                    tabBarUnderlineStyle={{ display: 'none' }}
                    tabBarActiveTextColor='#3fcccb'
                    initialPage={0}
                >
                    <div style={{ background: '#fff', padding: '0 0 0 1.5%' }}>
                        {[1, 2, 3, 4, 5, 6].map(val => (
                            <img src={`zhuba/lg_0${val}.jpg`} alt='' style={{ float: 'left', width: '45%', height: 'auto', margin: '3% 2% 0 2%' }} />
                        ))}
                    </div>
                    <div style={{ background: '#fff', padding: '0 0 0 1.5%' }}>
                    {[1, 2, 3, 4, 5, 6].map(val => (
                            <img src={`zhuba/lg_0${val}.jpg`} alt='' style={{ float: 'left', width: '45%', height: 'auto', margin: '3% 2% 0 2%' }} />
                        ))}
                    </div>
                    <div style={{ background: '#fff', padding: '0 0 0 1.5%' }}>
                    {[1, 2, 3, 4, 5, 6].map(val => (
                            <img src={`zhuba/lg_0${val}.jpg`} alt='' style={{ float: 'left', width: '45%', height: 'auto', margin: '3% 2% 0 2%' }} />
                        ))}
                    </div>
                    <div style={{ background: '#fff', padding: '0 0 0 1.5%' }}>
                    {[1, 2, 3, 4, 5, 6].map(val => (
                            <img src={`zhuba/lg_0${val}.jpg`} alt='' style={{ float: 'left', width: '45%', height: 'auto', margin: '3% 2% 0 2%' }} />
                        ))}
                    </div>
                    <div style={{ background: '#fff', padding: '0 0 0 1.5%' }}>
                    {[1, 2, 3, 4, 5, 6].map(val => (
                            <img src={`zhuba/lg_0${val}.jpg`} alt='' style={{ float: 'left', width: '45%', height: 'auto', margin: '3% 2% 0 2%' }} />
                        ))}
                    </div>
                    <div style={{ background: '#fff', padding: '0 0 0 1.5%' }}>
                    {[1, 2, 3, 4, 5, 6].map(val => (
                            <img src={`zhuba/lg_0${val}.jpg`} alt='' style={{ float: 'left', width: '45%', height: 'auto', margin: '3% 2% 0 2%' }} />
                        ))}
                    </div>
                </Tabs>
            </div>
        )
    }
}