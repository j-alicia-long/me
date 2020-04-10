import React, { Component } from 'react';
import { HashRouter, BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { BreakpointProvider } from 'react-socks';

import SidePanel from './components/SidePanel';
import Homepage from './components/Homepage';
import Portfolio from './components/Portfolio';

import {Container, Row, Col} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <HashRouter basename={process.env.PUBLIC_URL}>
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
      </HashRouter>
    );
  }
}

export default App;
