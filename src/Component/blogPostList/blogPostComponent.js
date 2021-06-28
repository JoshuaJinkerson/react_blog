import React from 'react';
import './blogPostStyle.css';

import '../newBlogPost/newBlogComponent'
import '../recentBlogPost/recentBlogPost'

export class BlogPostThread extends React.Component{    
    render(){
        return (
            <div className="blogPostThread">
                <h2>Recent Post</h2>
                <recentBlogPost/>
            </div>
        )
    }
}