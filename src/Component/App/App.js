import React from 'react';
import './App.css';

import {BlogComment} from '../newBlogPost/newBlogComponent';

 class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Personal Blog</h1>
          <BlogComment/>
        </header>
      </div>
    )
  }
};

export default App;
