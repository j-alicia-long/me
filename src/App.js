import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import { Breakpoint, BreakpointProvider } from 'react-socks';

import SidePanel from './components/SidePanel';
import Homepage from './components/Homepage';
import Portfolio from './components/Portfolio';

import {Container, Row, Col} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Router>
      <BreakpointProvider>
        <Container className="App" fluid={true}>
          <Row className="flex-xl-nowrap">
            <SidePanel/>
            <Col className="p-0">
              <main>
                <Switch>
                  <Route exact path="/" component={Homepage} />
                  <Route exact path="/portfolio" component={Portfolio} />
                </Switch>
              </main>
            </Col>
          </Row>
        </Container>
      </BreakpointProvider>
      </Router>
    );
  }
}

export default App;
