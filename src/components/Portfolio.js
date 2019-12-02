import React, { Component } from 'react';

import { Card, Button } from 'react-bootstrap';
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
                <Card.Text>
                  {project.description}
                </Card.Text>
                <Card.Footer>{project.tech}</Card.Footer>
              </Card.Body>
            </Card>
            <h2 className="m-4"> -- </h2>
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
