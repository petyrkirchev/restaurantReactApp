import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {Switch, Route} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import {Button, Row, Col} from 'reactstrap';
import Navigation from "./components/Navigation"

import Home from "./containers/home";
import Menu from "./containers/menu";
import Contacts from "./containers/contacts"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Row>
          <Col sm="12">
            <Router history={createBrowserHistory()}>
              <Switch>
                <Route exact path={"/"} component={Home}/>
                <Route exact path={'/menu/'} component={Menu}/>
                <Route exact path={'/contacts/'} component={Contacts}/>
              </Switch>
            </Router>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
