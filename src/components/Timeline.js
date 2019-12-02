import React, { Component } from 'react';

import { Card } from 'react-bootstrap';
import resumeData from './resumeData';

class Timeline extends Component {
  render() {
    const { resumeData: { education, work } } = this.props;

    return (
      <div className="Timeline p-4">
        <h2 className="text-center"><strong>Timeline</strong></h2>
        {work.map((item, i) => (
          <>
          <Card className="my-4" border="danger">
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
          <h3 className="text-center"> | </h3>
          </>
        ))}
        {education.map((item, i) => (
          <>
          <Card className="my-4" bg="dark" border="danger" text="white">
            <Card.Header>{item.StartDate} - {item.EndDate}</Card.Header>
            <Card.Body>
              <Card.Title><h4>{item.Name}</h4></Card.Title>
              <Card.Subtitle><h6>{item.Specialization}</h6></Card.Subtitle>
              <Card.Text className="mt-4">
                {item.Achievements}
              </Card.Text>
            </Card.Body>
          </Card>
          <h3 className="text-center"> | </h3>
          </>
        ))}
      </div>
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
