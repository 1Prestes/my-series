import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './Home';
import NewSeries from './NewSeries';
import Series from './Series';
import EditSerie from './EditSerie';
import About from './About';

class App extends Component {

  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" role="navigation">
          <div className="container">
            <a className="navbar-brand" href="#page-top">
              <img src="/images/logo.png" height="30" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/new">Cadastrar nova série</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">Sobre mim</Link>
                </li>
              </ul>
            </div>

          </div>
        </nav>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/serie/edit/:id' component={EditSerie} />
        <Route exact path='/new' component={NewSeries} />
        <Route exact path='/series/:genre' component={Series} />
      </Router>
    );
  }
}
export default App;
