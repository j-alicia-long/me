import React, { Component } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import { Accordion, Card, Button } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Skills extends Component {
  render() {
    const { skills } = this.props;

    return (
      <Container className="Skills my-4 text-center">
        <h2><strong>Skills</strong></h2>
        <Row>
          {skills.topSkills.map((skill, i) => (
            <Col className="py-4" xl="2" md="4" sm="6">
              <SkillIcon skill={skill}/>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

const SkillIcon = ({skill}) => (
  <a className="skillcard">
    <h5><FontAwesomeIcon icon={skill.iconName}/></h5>
    <h6>{skill.skillname}</h6>
  </a>
);



export default Skills;
