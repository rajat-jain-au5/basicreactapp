import React, { Component } from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom'
import Blog from './components/Blog';


export class App extends Component {


  render() {
   

    return (
      <BrowserRouter>
      <div className="container">
        <h1 className="my-5 text-primary text-center">Posts</h1>
          <Redirect to="/"/>
          <Route path="/1" />
          <Route path="/2" />
          <Route path="/3" />

        <Blog  />
      </div>
      </BrowserRouter>
    )
  }
}

export default App