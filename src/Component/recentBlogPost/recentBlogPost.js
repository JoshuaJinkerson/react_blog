import React from 'react';
import './recentBlogPost.css'

export class recentBlogPost extends React.Component {
    constructor(props){
        super(props)

        this.getDate = this.getDate.bind(this)
    }
    
    getDate(){
        new Date().toDateString()
    }
    
    render() {
        return (
            <div className="blogPost">
               <h3>Blog Post Title</h3>
               <p>Blog Text</p>
               <p>{this.getDate}</p> 
            </div>
        )
    }
}
