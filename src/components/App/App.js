import React, {Component} from 'react';
import './App.css';
import Main from "../Main/Main";
import {Link} from "react-router-dom";

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
                <Main/>
            </div>
        );
    }
}

export default App;
