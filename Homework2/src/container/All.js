import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class All extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        } 
    } 
    componentDidMount(){
        fetch(`https://cnodejs.org/api/v1/topics?tab=all&page=${this.props.match.params.page}`)
            .then( (res) => res.json())
            .then((res)=>{
                this.setState({data:res.data});
        });
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.match.params.page !== this.props.match.params.page){
            fetch(`https://cnodejs.org/api/v1/topics?tab=all&page=${this.props.match.params.page}`)
                .then((res)=>res.json())
                .then((res)=>{
                    this.setState({data:res.data})
            });
        }
    }
    render(){
        return (
            <div className='topic_list' >
                {
                    this.state.data.map((item,index) => 
                        <div key={index} className='cell' style={{'height':'50px'}}>
                            <a className='cella'><img src={item.author.avatar_url}></img></a>
                            <span className='reply_count pull-left' style={{'marginTop': '7px'}}>
                                <span className='count_of_replies'>{item.reply_count}</span>
                                /
                                <span className='count_replies'>{item.visit_count}</span>
                            </span>
                            <div className='celld'>
                                <span>置顶</span>
                                <Link to={`/details/${item.id}`} style={{'color':'black'}}>{item.title}</Link>
                            </div>
                            <div className='last_time pull-right' style={{'marginTop':'-20px'}}>
                                <img className='iii' src={item.author.avatar_url}></img>
                                <span className='last_time pull-right'>一天前</span>
                            </div>
                        </div>
                    )
                }
                <div className='pagination'>
                    <ul style={{'marginLeft':'10px','width':'900px','backgroundColor':'white','marginLeft':'-10px','marginTop':'-10px','paddingBottom':'12px','paddingLeft':'10px'}} >
                        {
                            [1,2,3,4,5,6,7,8,9,10].map((item,index) =>
                                <li key={index}>
                                    <Link style={{'color':'black'}} to={`/home/all/${item}`}>{item}</Link>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
