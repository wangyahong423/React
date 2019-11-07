import React, { Component } from 'react';
import {fetch} from 'whatwg-fetch';

export default class Details extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        } 
    } 
    componentDidMount(){
        
        console.log(this.props.match.params.id)
        var id = this.props.match.params.id;
        fetch('https://cnodejs.org/api/v1/topic/'+id)
            .then( (res) => res.json())
            .then((res)=>{
                this.setState({data:res.data});
        });
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.match.params.page !== this.props.match.params.page){
            fetch('https://cnodejs.org/api/v1/topic/'+this.props.match.params.id)
                .then((res)=>res.json())
                .then((res)=>{
                    this.setState({data:res.data})
            });
        }
    }
    render() {
        console.log(this.state.data)
        return (
            <div id='content' style={{'width':'900px'}}>
                <div className='panel'>
                    <div className='header topic_header' style={{'height':'80px'}}>
                        <span className='topic_full_title'>
                            <span className='put_top'>置顶</span>
                            {this.state.data.title}
                        </span>
                        <div className='changes'>
                            <span>发布于六个月前</span>
                            <span>a5ting</span>
                            <span>55588次浏览</span>
                            <span>来自分享</span>
                        </div>
                    </div>
                    <div className='inner topic'>
                        <div className='topic_content'>
                            <div  dangerouslySetInnerHTML={{__html:this.state.data.content}} className='markdown-text'>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
