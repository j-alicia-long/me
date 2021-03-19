import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import { BreakpointProvider } from 'react-socks';

import SidePanel from './components/SidePanel';
import Homepage from './components/Homepage';
import Portfolio from './components/Portfolio';

import {Container, Row, Col} from 'react-bootstrap';

const Footer = () => (
  <footer className="main-footer p-3">
    <div class="copyright text-center">
      Built with &#60;3 in ReactJS | <strong>Jennifer Long</strong> &copy; 2021
    </div>
  </footer>
);

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
      <BreakpointProvider>
        <Container className="App" fluid={true}>
          <Row className="flex-xl-nowrap">
            <SidePanel/>
            <Col className="p-0">
              <main>
                <Switch>
                  <Route exact path="/" component={Homepage} />
                  <Route path="/portfolio" component={Portfolio} />
                </Switch>
              </main>
            </Col>
          </Row>
        </Container>
        <Footer/>
      </BreakpointProvider>
      </HashRouter>
    );
  }
}

export default App;


// <BrowserRouter basename={process.env.PUBLIC_URL}>
