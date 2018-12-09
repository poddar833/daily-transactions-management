import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <header className="App-header">
              <img src="https://www.educationalappstore.com/images/best-apps-for-education.jpg" alt="logo" />
              <p>
                Transactions Saving App
              </p>
              <Link to='/person'
                className="App-link"
              >
                Start>>
              </Link>
                <Route path='/person' component={Person} />
            </header>
          </div>
        </Router>

    );
  }
}

export default App;
