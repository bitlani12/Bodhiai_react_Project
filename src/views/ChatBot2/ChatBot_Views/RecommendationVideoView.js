import React from 'react';
class RecommendationVideoView extends React.Component{
    render(){
        return(
            <div>
                {this.props.data.data.map((val)=>{
                    return(
                        <div>
                            <div>{val.chapter} <span>{val.subject}</span></div>

                            <iframe height="300px" width="100%" src={`https://www.youtube.com/embed/${val.link}`} frameborder="1"  allowfullscreen="allowfullscreen" style={{marginTop: 10}}> </iframe>  
                            <div>{val.title.map((vale) => <div> </div>)} </div>
                        </div>
                        )
                        })
                        }</div>
        )
    }
}
export default RecommendationVideoView