import React from 'react';
export default class AnimePoster extends React.Component{
    render(){
        return(

            <div>
                <h1>AnimePoster</h1>
                <img src={this.props.image_url} alt={this.props.title}/>
            </div>
        );
    }
}