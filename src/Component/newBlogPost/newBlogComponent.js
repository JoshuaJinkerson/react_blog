import React from 'react';
import './newBlogPostStyle.css'

export class BlogComment extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title:'',
            post:''
        }

        this.handleTitleChange =this.handleTitleChange.bind(this)
        this.handlePostChange =this.handlePostChange.bind(this)

    }

    handlePostChange(e){
        this.setState({
            post: e.target.value
        })    
    }

    handleTitleChange(e){
        this.setState({
            title: e.target.value,
        })    
    }


    render(){
        return (
            <div className="newPost">
                <form>
                <input 
                    type="text" 
                    placeholder="Blog Title"
                    title={this.state.value}
                    onChange={this.handleTitleChange}
                    />
                <textarea 
                    placeholder="Blog Post"
                    post={this.state.value}
                    onChange={this.handlePostChange}
                >
                </textarea>
                <br/>
                <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}