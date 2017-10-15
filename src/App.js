import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Portal of forts and trekking routes in India</h1>
        </header>
        <Link to="/App"></Link><hr/>
        <Link to="signout">SignOut</Link><hr/>
        <Link to="login">LogIn</Link><hr/>
      </div>
    );
  }
}

export default App;
