import React from 'react';
import './newBlogPostStyle.css'

export class BlogComment extends React.Component{
    render(){
        return (
            <div className="newPost">
                <textarea></textarea>
                <button type='submit'>Submit</button>
            </div>
        )
    }
}