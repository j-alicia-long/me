import React, { Component } from 'react';
import styled from "styled-components";

import { Container, Row, Col, Card } from 'react-bootstrap';
import resumeData from './resumeData';

const imgPath = process.env.PUBLIC_URL + "/images/portfolio/";

// Styled components
const StyledCard = styled(Card)`
  height: 95%;
  font-size: .9rem;
  &:hover {
    box-shadow: 1px 1px 2px rgba(0,0,0,0.4);
  }
  .card-subtitle, .card-header, .card-footer {
    font-size: .7rem;
  }
  .card-footer {
    background-color: #ce4b58;
    color: white;
  }
  a {
    color: black;
  }
`;


class Portfolio extends Component {
  render() {

    return (
      <Container className="Portfolio p-4 text-center">
        <h2 className="my-4">Portfolio</h2>
        <Row>
          {resumeData.portfolio.map((project, i) => (
            <Col xl="4" lg="6">
              <ProjectCard project={project}/>
              <br/>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

const ProjectCard = ({project}) => (
  <StyledCard className="m-2">
    <Card.Img variant="top" src={imgPath+project.imgurl} />
    <Card.Body>
      <Card.Title>
        <a href={project.link}><h4>{project.name}</h4></a>
      </Card.Title>
      <Card.Subtitle><h6>{project.date}</h6></Card.Subtitle>
      <hr/>
      <Card.Text className="text-left">
        {project.description}
      </Card.Text>
    </Card.Body>
    <Card.Footer>{project.tech}</Card.Footer>
  </StyledCard>
);

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
