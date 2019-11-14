import React, { Component } from 'react'
import { NavBar, Icon,Tabs,Carousel} from 'antd-mobile';
// const tabs = [
//     { title: '推荐', sub: '1' },
//     { title: '家具', sub: '2' },
//     { title: '餐厨', sub: '3' },
//     { title: '床上用品', sub: '3' },
//   ];
   
export default class AppHome extends Component {
    render() { 
        return (
            <div>
                <NavBar style={{backgroundColor:'#3fcccb',color:'#000',height:'44px',position:'sticky ',top:'0',zIndex:11111111}}

                >住吧家居</NavBar>

                    <Carousel
                        autoplay={true}
                        infinite
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                        dotStyle={{ height: 3, width: 20, borderRadius: 0 }}
                        dotActiveStyle={{ height: 3, width: 20, borderRadius: 0, backgroundColor: '#3fcccb' }}
                    >
                    {[1, 2].map(val => (
                        <a
                            key={val}

                            style={{ display: 'inline-block', width: '100%', height: 'auto' }}
                        >
                            <img
                                src={`zhuba/${val}.png`}
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
                    <div>
                        <ul>
                            <img src='zhuba/001.png' style={{height:'20%',width:'28%',marginRight:'8%',marginLeft:'-6%'}}></img>
                            <img src='zhuba/002.png' style={{height:'20%',width:'28%',marginRight:'8%'}}></img>
                            <img src='zhuba/003.png' style={{height:'20%',width:'28%'}}></img>

                        </ul>
                    </div>
                    <div style={{height:'13vw',backgroundColor:'white',width:'100%',lineHeight:'13vw'}}>
                        <span style={{height:'5vw',width:'100%',borderLeft:'1vw solid #3fcccb'}}><span style={{marginLeft:'5vw'}}>热门推荐</span></span>
                    </div>
                    <div>
                        <img src='zhuba/004.png' style={{height:'auto',width:'100%'}}></img>
                    </div>
                   
            </div>
        )
    }
}