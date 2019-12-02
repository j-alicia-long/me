import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Breakpoint } from 'react-socks';

import resumeData from './resumeData';
import {Col} from 'react-bootstrap';
import {Nav, NavItem, Navbar, NavDropdown} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(fab, fas, faEnvelope);


const navStyle = {
  'backgroundColor': '#343a40',
};


class SidePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navExpanded: false
    };

    this.setNavExpanded = this.setNavExpanded.bind(this);
  }

  setNavExpanded(expanded) {
    this.setState({ navExpanded: expanded });
  }

  render() {
    console.log(this.state.navExpanded);

    return (
      <Col className="side-panel" style={navStyle}
           xl="3" md="4" sm="12">
        <Navbar
          onToggle={this.setNavExpanded}
          expand="md" sticky="top"
          bg="dark" variant="dark"
        >
          <Breakpoint small down>
          <div className="panel-header-expanded">
            <Navbar.Brand href="/">{resumeData.name}</Navbar.Brand>
            <h6>{resumeData.role}</h6>
          </div>
          </Breakpoint>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse className="flex-column" id="responsive-navbar-nav">

          <Breakpoint medium up>
            <Nav className="text-center flex-column">
              <PanelHeader name={resumeData.name} role={resumeData.role}/>
              <PanelItems/>
              <NavDropdown.Divider />
              <ContactInfo resumeData={resumeData}/>
              <div className="social-links">
                <SocialLinks links={resumeData.socialLinks}
                             justify="mx-0" />
              </div>

            </Nav>
          </Breakpoint>

          <Breakpoint small down>
            <Nav className="flex-column">
              <PanelItems/>
              <NavDropdown.Divider />
              <ContactInfo resumeData={resumeData}/>
              <Nav className="flex-row">
                <SocialLinks links={resumeData.socialLinks}
                             justify="mr-4" />
              </Nav>
            </Nav>
          </Breakpoint>

          </Navbar.Collapse>

        </Navbar>
      </Col>
    );
  }
}

const PanelHeader = ({name, role}) => (
  <div className="panel-header my-2">
    <div class="image-cropper">
      <img src="/images/columns_square.jpg" alt="avatar" class="profile-img" />
    </div>
    <div>
      <Navbar.Brand href="/">{name}</Navbar.Brand>
      <h6>{role}</h6>
    </div>
  </div>
);

const PanelItems = () => (
  <>
    <Nav.Link href="/">About</Nav.Link>
    <Nav.Link href="Jennifer Long - Resume.pdf"
              target="_blank" rel="noopener noreferrer">
      Resume
    </Nav.Link>
    <Nav.Link href="/portfolio">Portfolio</Nav.Link>
  </>
);

const ContactInfo = ({resumeData}) => (
  <div className="contact-info">
    <Nav.Link href="#">
      <FontAwesomeIcon icon="envelope"/> {resumeData.email}
    </Nav.Link>
  </div>
);

const SocialLinks = ({links, justify}) => (
  <>
    {links.map((social, i) => (
      <Nav.Link className={justify} href={social.url}>
        <FontAwesomeIcon icon={['fab', social.iconName]} />
      </Nav.Link>
    ))}
  </>
);



export default withRouter(SidePanel);

// <NavDropdown eventKey={1} title="Item 1">
//     <MenuItem eventKey={1.1} href="#">Item 1.1</MenuItem>
// </NavDropdown>
