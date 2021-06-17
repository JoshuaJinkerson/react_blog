import React from 'react';
import './App.css';

import 'normalize.css'

import {BlogComment} from '../newBlogPost/newBlogComponent';
import {BlogPostThread} from '../blogPostList/blogPostComponent'

 class App extends React.Component {
  render(){
    return (
      <div className="App">
        <h1>Personal Blog</h1>
        <header className="App-header">
          <BlogComment className="newPost"/>
          <BlogPostThread className="blogThread"/>
        </header>
      </div>
    )
  }
};

export default App;
