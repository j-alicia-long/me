import React, { Component } from 'react';

import { Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const imgPath = process.env.PUBLIC_URL + '/images/';

class Introduction extends Component {
  render() {

    return (
      <div className="Intro">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 tinted"
              src={`${imgPath}/cover.jpg`}
              alt="Jumbotron"
            />
            <Carousel.Caption className="text-left">
              <h1>Hi! <br />I'm Jennifer</h1>
              <h5 className="my-4">
                <a className="btn btn-dark btn-learn"
                   href="Jennifer Long - Resume.pdf"
                   target="_blank" rel="noopener noreferrer">
                  <strong>VIEW CV </strong>
                  <FontAwesomeIcon icon={faDownload} />
                </a>
              </h5>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
      </div>
    );
  }
}

export default Introduction;
