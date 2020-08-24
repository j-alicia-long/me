import React, { Component } from 'react';
import styled from "styled-components";

import { Container, Row, Col } from 'react-bootstrap';
import { Accordion, Card, Button } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const accordionStyle = {
  'backgroundColor': '#f0f0f0',
};

// Styled components
const StyledSkillIcon = styled.div`
  font-size: 3rem;
  color: black;
  &:hover {
    color: #ce4b58;
  }
`;


class Skills extends Component {
  render() {
    const { skills } = this.props;

    return (
      <Container className="Skills my-4 px-4 text-center">

        <h2><strong>Skills</strong></h2>
        <Row className="px-4">
          {skills.primarySkills.map((skill, i) => (
            <Col className="py-4" xl="2" md="4" sm="6">
              <SkillIcon skill={skill}/>
            </Col>
          ))}
        </Row>

        <Row className="px-4">
          <Accordion className="w-100">
            <Card style={accordionStyle} className="px-4">
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                <h1 style={{'color': 'black'}}><FontAwesomeIcon icon={["fa", "angle-down"]} /></h1>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>

                  <Row>
                    <Col xl="2" lg="3">
                      <h4>Languages</h4>
                      {skills.languages.map((lang, i) => (
                        <h6>{lang.skillName}</h6>
                      ))}
                      <hr/><br/>
                    </Col>

                    <Col xl="10" lg="9">
                      <h4>Additional Experience</h4>
                      <Row>
                        {skills.secondarySkills.map((skill, i) => (
                          <Col className="py-4" xl="2" md="4" sm="6">
                            <SkillIcon skill={skill}/>
                          </Col>
                        ))}
                      </Row>
                    </Col>

                  </Row>

                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Row>

      </Container>
    );
  }
}

const SkillIcon = ({skill}) => (
  <StyledSkillIcon>
    <FontAwesomeIcon icon={skill.iconName}/>
    <h6>{skill.skillName}</h6>
  </StyledSkillIcon>
);



export default Skills;
