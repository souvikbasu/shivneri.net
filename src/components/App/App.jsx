import React, { Component } from 'react';

import './App.css';
import { Link } from 'react-router'


class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <nav>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/signin'>Sign In</Link></li>
                            <li><Link to='/signout'>Sign Out</Link></li>
                        </ul>
                    </nav>
                </header>
                {this.props.children}
            </div>
        );
    }
}

export default App;
