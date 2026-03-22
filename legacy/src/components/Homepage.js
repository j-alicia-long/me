import React, { Component } from 'react';

import Introduction from './Introduction';
import About from './About';
import Skills from './Skills';
import Timeline from './Timeline';
import resumeData from './resumeData';


class Homepage extends Component {
  render() {
    return (
      <div className="Homepage">
        <Introduction/>
        <About resumeData={resumeData}/>
        <Skills skills={resumeData.skills}/>
        <Timeline resumeData={resumeData}/>
      </div>
    );
  }
}

export default Homepage;
