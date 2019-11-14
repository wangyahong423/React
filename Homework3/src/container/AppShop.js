import React from 'react';
import { NavBar, Icon, Tabs, Carousel,WingBlank,SearchBar,Flex} from 'antd-mobile';

export default class AppShop  extends React.Component{
    render(){
        return (
            <div>
                <NavBar  style={{backgroundColor:'#3fcccb',color:'#000',height:'44px',position:'sticky ',top:'0',zIndex:11111111}}
                    rightContent={[
                        <i style={{ fontSize: 22, lineHeight: '22px', marginRight: '8px' }} className='iconfont icon-gouwuche'></i>
                        
                    ]}
                >商城</NavBar> 
                 
                <Carousel
                    style={{position:'relative' }}
                    autoplay={true}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                >
                    {[3,1,2].map(val => (
                        <a
                        key={val}
                        href="http://www.alipay.com"
                        style={{ display: 'inline-block', width: '100%', height: 'auto' }}
                        >
                            <img
                                src={ `zhuba/0${val}.png`}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>
                <div style={{ zIndex:111111111,left:0, width: '100%', height: '18%',position:'relative',bottom:'51vw' }}>
                    <SearchBar placeholder="输入关键字搜索" maxLength={8} style={{background:'#000',opacity:'0.5'}}/>
                </div>
                <div style={{width:'100%',height:'50vw',backgroundColor:'white',display:'inline-block',paddingTop:'5vw',marginTop:'-15vw'}}>
                    <div style={{width:'16vw',marginLeft:'5vw',float:'left'}}>
                        <img src='zhuba/zhuo.png' style={{height:'13vw',width:'13vw'}} />
                        <p style={{marginLeft:'5vw',marginTop:'1vw',fontSize:'2vw'}}>桌</p>
                    </div>
                    <div style={{width:'16vw',marginLeft:'2vw',float:'left'}}>
                        <img src='zhuba/chuang.png' style={{height:'13vw',width:'13vw'}} />
                        <p style={{marginLeft:'5vw',marginTop:'1vw',fontSize:'2vw'}}>床</p>
                    </div>
                    <div style={{width:'16vw',marginLeft:'2vw',float:'left'}}>
                        <img src='zhuba/yi.png' style={{height:'13vw',width:'13vw'}} />
                        <p style={{marginLeft:'5vw',marginTop:'1vw',fontSize:'2vw'}}>椅</p>
                    </div>
                    <div style={{width:'16vw',marginLeft:'2vw',float:'left'}}>
                        <img src='zhuba/ji.png' style={{height:'13vw',width:'13vw'}} />
                        <p style={{marginLeft:'5vw',marginTop:'1vw',fontSize:'2vw'}}>几</p>
                    </div>
                    <div style={{width:'16vw',marginLeft:'2vw',float:'left'}}>
                        <img src='zhuba/gui.png' style={{height:'13vw',width:'13vw'}} />
                        <p style={{marginLeft:'5vw',marginTop:'1vw',fontSize:'2vw'}}>柜</p>
                    </div>
                    <div style={{width:'16vw',marginLeft:'3vw',float:'left'}}>
                        <img src='zhuba/shujia.png' style={{height:'13vw',width:'13vw',marginLeft:'2vw'}} />
                        <p style={{marginLeft:'6vw',marginTop:'1vw',fontSize:'2vw'}}>书架</p>
                    </div>
                    <div style={{width:'16vw',marginLeft:'3vw',float:'left'}}>
                        <img src='zhuba/shafa.png' style={{height:'13vw',width:'13vw',marginLeft:'1vw'}} />
                        <p style={{marginLeft:'5vw',marginTop:'1vw',fontSize:'2vw'}}>沙发</p>
                    </div>
                    <div style={{width:'16vw',marginLeft:'3vw',float:'left'}}>
                        <img src='zhuba/shipin.png' style={{height:'13vw',width:'13vw',marginLeft:'0vw'}} />
                        <p style={{marginLeft:'4vw',marginTop:'1vw',fontSize:'2vw'}}>饰品</p>
                    </div>
                    <div style={{width:'16vw',marginLeft:'3vw',float:'left'}}>
                        <img src='zhuba/jiaju.png' style={{height:'13vw',width:'13vw',marginLeft:'-1vw'}} />
                        <p style={{marginLeft:'1vw',marginTop:'1vw',fontSize:'2vw'}}>户外家具</p>
                    </div>
                    <div style={{width:'16vw',marginLeft:'3vw',float:'left'}}>
                        <img src='zhuba/all-icon.png' style={{height:'13vw',width:'13vw',marginLeft:'-1vw'}} />
                        <p style={{marginLeft:'1vw',marginTop:'1vw',fontSize:'2vw'}}>全部分类</p>
                    </div>
                </div>
                <div style={{marginTop:'4vw',height:'auto',float:'left',marginLeft:'3vw'}}>
                    <img style={{width:"40vw",marginLeft:'5vw'}} src='zhuba/01.png'></img>
                    <p style={{marginLeft:'5vw',color:'grey',marginTop:'1vw',fontSize:'3vw'}}>Top Art Studio 欧式风格精细…</p>
                    <p style={{marginLeft:'5vw',marginTop:'-1vw',fontSize:'3vw'}}>￥ 39.95</p>
                </div>
                <div style={{marginTop:'4vw',height:'auto',float:'left'}}>
                    <img style={{width:"40vw",marginLeft:'5vw'}} src='zhuba/02.png'></img>
                    <p style={{marginLeft:'5vw',color:'grey',marginTop:'1vw',fontSize:'3vw'}}>顺顺工艺欧式风格塑料外框黑…</p>
                    <p style={{marginLeft:'5vw',marginTop:'-1vw',fontSize:'3vw'}}>￥ 39.95</p>
                </div>
                <div style={{marginTop:'4vw',height:'auto',float:'left',marginLeft:'3vw'}}>
                    <img style={{width:"40vw",marginLeft:'5vw'}} src='zhuba/01.png'></img>
                    <p style={{marginLeft:'5vw',color:'grey',marginTop:'1vw',fontSize:'3vw'}}>Top Art Studio 欧式风格精细…</p>
                    <p style={{marginLeft:'5vw',marginTop:'-1vw',fontSize:'3vw'}}>￥ 39.95</p>
                </div>
                <div style={{marginTop:'4vw',height:'auto',float:'left'}}>
                    <img style={{width:"40vw",marginLeft:'5vw'}} src='zhuba/02.png'></img>
                    <p style={{marginLeft:'5vw',color:'grey',marginTop:'1vw',fontSize:'3vw'}}>顺顺工艺欧式风格塑料外框黑…</p>
                    <p style={{marginLeft:'5vw',marginTop:'-1vw',fontSize:'3vw'}}>￥ 39.95</p>
                </div><div style={{marginTop:'4vw',height:'auto',float:'left',marginLeft:'3vw'}}>
                    <img style={{width:"40vw",marginLeft:'5vw'}} src='zhuba/01.png'></img>
                    <p style={{marginLeft:'5vw',color:'grey',marginTop:'1vw',fontSize:'3vw'}}>Top Art Studio 欧式风格精细…</p>
                    <p style={{marginLeft:'5vw',marginTop:'-1vw',fontSize:'3vw'}}>￥ 39.95</p>
                </div>
                <div style={{marginTop:'4vw',height:'auto',float:'left'}}>
                    <img style={{width:"40vw",marginLeft:'5vw'}} src='zhuba/02.png'></img>
                    <p style={{marginLeft:'5vw',color:'grey',marginTop:'1vw',fontSize:'3vw'}}>顺顺工艺欧式风格塑料外框黑…</p>
                    <p style={{marginLeft:'5vw',marginTop:'-1vw',fontSize:'3vw'}}>￥ 39.95</p>
                </div>
            </div>
        )
    }
}