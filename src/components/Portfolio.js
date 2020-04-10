import React, { Component } from 'react';

import { Card } from 'react-bootstrap';
import resumeData from './resumeData';

class Portfolio extends Component {
  render() {

    return (
      <div className="Portfolio p-4 text-center">
        <h2><strong>Portfolio</strong></h2>
        {resumeData.portfolio.map((project, i) => (
          <>
            <Card className="m-4">
              <Card.Img variant="top" src={project.imgurl} />
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
          </>
        ))}
      </div>
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
