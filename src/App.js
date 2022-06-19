import React, { Component } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

class App extends Component {
  // App trở thành presentaion component với chức năng render ra Main component container
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;