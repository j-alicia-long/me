import React, { Component } from 'react';

import { Container, Row, Col, Card } from 'react-bootstrap';
import resumeData from './resumeData';

const imgPath = process.env.PUBLIC_URL + "/images/portfolio/";

class Portfolio extends Component {
  render() {

    return (
      <Container className="Portfolio p-4 text-center">
        <h2 className="mt-4">Portfolio</h2>
        <Row>
          {resumeData.portfolio.map((project, i) => (
            <Col lg={{ span: 8, offset: 2 }}>
              <Card className="m-4">
                <Card.Img variant="top" src={imgPath+project.imgurl} />
                <Card.Body>
                  <Card.Title>
                    <a href={project.link}><h4>{project.name}</h4></a>
                  </Card.Title>
                  <Card.Subtitle><h6>{project.date}</h6></Card.Subtitle>
                  <Card.Text>
                    {project.description}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>{project.tech}</Card.Footer>
              </Card>
              <br/>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

// {resumeData.portfolio.map((project, i) => (
//   <div>
//     <p>{project.name}</p>
//     <p>{project.description}</p>
//     <p>{project.tech}</p>
//     <p>{project.link}</p>
//     <p>{project.imgurl}</p>
//   </div>
// ))}

export default Portfolio;
