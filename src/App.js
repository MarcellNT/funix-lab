import React, { Component } from 'react';
import './App.css';
import Main from './components/MainComponent';

class App extends Component {
// App trở thành presentaion component với chức năng render ra Main component
  render() {
    return (   
      <div className="App">      
         <Main/>                        
      </div>
    );
  }
}
export default App;