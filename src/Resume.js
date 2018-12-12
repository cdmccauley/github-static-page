// default imports
import React, { Component } from 'react';
import './Resume.css';

// material imports
import Typography from '@material-ui/core/Typography';

class Resume extends Component {
  render() {
    return (
      <div id='resume'>
        <div id='resume-header'>
          <div id='resume-img'>
            <img src="avatar-full.png" alt="Chris McCauley"></img>
          </div>
          <div id='resume-intro'>
            <Typography variant='title'>Chris McCauley</Typography>
            <Typography variant='subheading' className='italic'>Web Developer</Typography>
            <Typography variant='body1'>Recent graduate of Davis Technical College with 
              certificates in software development, networking, and technical support. 
              Lifelong interes in PC hardware, software, and networking, 2 years 
              experience in professional technical support, and 10 years of professional 
              production experience including CAD design and CNC programming.
            </Typography>
          </div>
        </div>
        <div id='resume-contact'>
          <hr />
          <Typography>cdmccauley@gmail.com</Typography>
          <Typography>Salt Lake and Davis Counties, Utah</Typography>
          <Typography>cdmccauley.github.io</Typography>
          <hr />
        </div>
        <div id='resume-edu'>
          <Typography className='underline'>EDUCATION</Typography>
          <Typography>Information Technology</Typography>
          <Typography>Software Development</Typography>
          <Typography>Davis Technical College</Typography>
          <Typography>2018</Typography>
          <Typography>Architectural and Engineering Design</Typography>
          <Typography>Computer Aided Drafting</Typography>
          <Typography>Davis Technical College</Typography>
          <Typography>2011</Typography>
        </div>
        <div id='resume-cert'>
          <Typography className='underline'>CERTIFICATIONS</Typography>
          <Typography>Networking Fundamentals</Typography>
          <Typography>Microsoft Technical Associate</Typography>
          <Typography>Information Technology Fundamentals</Typography>
          <Typography>CompTIA</Typography>
          <Typography>Linux Essentials</Typography>
          <Typography>Net Dev Group</Typography>
        </div>
        <div id='resume-skills'>
          <Typography className='underline'>SKILLS</Typography>
        </div>
      </div>
    );
  };
}

export default Resume;