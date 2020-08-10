import React, { Component } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import { Accordion, Card, Button } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from "styled-components";

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

const StyledLangIcon = styled(StyledSkillIcon)`
  font-size: 2rem;
  width: 3em;
`;


class Skills extends Component {
  render() {
    const { skills } = this.props;

    return (
      <Container className="Skills my-4 text-center">

        <h2><strong>Skills</strong></h2>
        <Row>
          {skills.primarySkills.map((skill, i) => (
            <Col className="py-4" xl="2" md="4" sm="6">
              <SkillIcon skill={skill}/>
            </Col>
          ))}
        </Row>

        <Row>
          <Accordion className="w-100">
            <Card style={accordionStyle}>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                <h1 style={{'color': 'black'}}><FontAwesomeIcon icon={["fa", "angle-down"]} /></h1>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>

                  <Row className="justify-content-center">
                    <h4>Languages</h4>
                    {skills.languages.map((lang, i) => (
                      <LangIcon lang={lang}/>
                    ))}
                  </Row>

                  <hr/>
                  <h4>Additional Experience</h4>
                  <Row>
                    {skills.secondarySkills.map((skill, i) => (
                      <Col className="py-4" xl="2" md="4" sm="6">
                        <SkillIcon skill={skill}/>
                      </Col>
                    ))}
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

const LangIcon = ({lang}) => (
  <StyledLangIcon>
    <FontAwesomeIcon icon={lang.iconName}/>
    <h6>{lang.skillName}</h6>
  </StyledLangIcon>
);



export default Skills;
