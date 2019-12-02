import React, { Component } from 'react';

import { Row, Col } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';


class Skills extends Component {
  render() {
    const { skillList } = this.props;

    return (
      <div className="Skills my-4 text-center">
        <h2><strong>Skills</strong></h2>
        <Row>
          {skillList.map((skill, i) => (
            <Col className="p-2" xl="2" md="4" sm="6" xs="12">
              <a className="skillcard">
                <h5><FontAwesomeIcon icon={skill.iconName}/></h5>
                <h6>{skill.skillname}</h6>
              </a>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default Skills;