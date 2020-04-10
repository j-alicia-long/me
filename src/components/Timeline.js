import React, { Component } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

import resumeData from './resumeData';

class Timeline extends Component {
  render() {
    const { resumeData: { education, work } } = this.props;

    return (
      <Container className="Timeline p-4">
        <h2 className="text-center">Experience</h2>
        <Row className="Experience mb-4">
          {work.map((item, i) => (
            <Col className="mb-4" xl="4" lg="6">
              <Card className="my-4" border="light">
                <Card.Header>{item.StartDate} - {item.EndDate}</Card.Header>
                <Card.Body>
                  <Card.Title><h4>{item.Name}</h4></Card.Title>
                  <Card.Subtitle><h6>{item.Specialization}</h6></Card.Subtitle>
                  <Card.Text className="mt-4">
                    {item.Achievements}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>{item.tech}</Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
        <br/>
        <h2 className="text-center">Education</h2>
        <Row className="Education mb-4">
          {education.map((item, i) => (
            <Col sm="6">
              <Card className="my-4" bg="dark" border="secondary" text="white">
                <Card.Header>{item.StartDate} - {item.EndDate}</Card.Header>
                <Card.Body>
                  <Card.Title><h4>{item.Name}</h4></Card.Title>
                  <Card.Subtitle><h6>{item.Specialization}</h6></Card.Subtitle>
                  <Card.Text className="mt-4">
                    {item.Achievements}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

// <div className="Timeline">
//   {work.map((item, i) => (
//     <div>
//       <p>{item.Name}</p>
//       <p>{item.Specialization}</p>
//       <p>{item.StartDate}</p>
//       <p>{item.EndDate}</p>
//       <p>{item.Achievements}</p>
//       <p>{item.tech}</p>
//     </div>
//   ))}
//   {education.map((item, i) => (
//     <div>
//       <p>{item.Name}</p>
//       <p>{item.Specialization}</p>
//       <p>{item.StartDate}</p>
//       <p>{item.EndDate}</p>
//       <p>{item.Achievements}</p>
//     </div>
//   ))}
// </div>

export default Timeline;
