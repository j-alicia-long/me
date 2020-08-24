import React, { Component } from 'react';
import styled from "styled-components";

import { Container, Row, Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

const imgPath = process.env.PUBLIC_URL + "/images/work-school/";


// Styled components
const StyledCard = styled(Card)`
  height: 95%;
  font-size: .9rem;
  border: 1px solid #e9afb5 !important;
  &:hover {
    box-shadow: 1px 1px 2px rgba(0,0,0,0.4);
  }
  .card-subtitle, .card-header, .card-footer {
    font-size: .7rem;
  }
`;

const StyledWorkCard = styled(StyledCard)`
  .card-header {
    background-color: #ce4b58;
    color: white;
  }
  .card-img-top {
    opacity: 0.75;
  }
`;

const StyledEducationCard = styled(StyledCard)`
  .card-header, .card-body {
    background-color: #ce4b58;
    color: white;
  }
`;


class Timeline extends Component {
  render() {
    const { resumeData: { education, work } } = this.props;

    return (
      <Container className="Timeline p-4">

        <h2 className="text-center">Experience</h2>
        <Row className="Experience mb-4">
          {work.map((item, i) => (
            <Col className="mb-4" xl="4" lg="6">
              <WorkCard item={item}/>
            </Col>
          ))}
        </Row>

        <br/>
        <h2 className="text-center">Education</h2>
        <Row className="Education mb-4">
          {education.map((item, i) => (
            <Col sm="6">
              <EducationCard item={item}/>
            </Col>
          ))}
        </Row>

      </Container>
    );
  }
}

const WorkCard = ({item}) => (
  <StyledWorkCard className="my-4" border="light">
    <Card.Header>{item.StartDate} - {item.EndDate}</Card.Header>
    <Card.Img variant="top" src={imgPath+item.Img}/>
    <Card.Body>
      <Card.Title><h4>{item.Name}</h4></Card.Title>
      <Card.Subtitle><h6>{item.Role}</h6></Card.Subtitle>
      <hr/>
      <Card.Text className="mt-4">
        {item.Achievements}
      </Card.Text>
    </Card.Body>
    <Card.Footer>Worked with:  {item.tech}</Card.Footer>
  </StyledWorkCard>
);

const EducationCard = ({item}) => (
  <StyledEducationCard className="my-4" bg="dark" border="secondary" text="white">
    <Card.Header>{item.StartDate} - {item.EndDate}</Card.Header>
    <Card.Img variant="top" src={imgPath+item.Img}/>
    <Card.Body>
      <Card.Title><h4>{item.Name}</h4></Card.Title>
      <Card.Subtitle><h6>{item.Specialization}</h6></Card.Subtitle>
      <hr/>
      <Card.Text className="mt-4">
        {item.Achievements.map((activity, i) => (
          <div>{activity}</div>
        ))}
      </Card.Text>
    </Card.Body>
  </StyledEducationCard>
);

export default Timeline;
