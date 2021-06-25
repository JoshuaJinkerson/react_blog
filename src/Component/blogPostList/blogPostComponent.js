import React from 'react';
import './blogPostStyle.css';

import '../newBlogPost/newBlogComponent'

export class BlogPostThread extends React.Component{    
    render(){
        return (
            <section className="blogList">
                <div className="blogPostThread">
                    <h2>Recent Post</h2>
                    <p>{this.props.title}</p>
                </div>
            </section>
        )
    }
}