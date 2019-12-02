import React, { Component } from 'react';

import { Container, Jumbotron } from 'react-bootstrap';


class About extends Component {
  render() {
    const { resumeData: { aboutme } } = this.props;

    return (
      <div className="About mb-4">
        <Jumbotron fluid>
          <Container>
            <h3>About Me</h3>
            <p>{aboutme}</p>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default About;
