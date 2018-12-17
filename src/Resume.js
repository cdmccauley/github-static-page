// default imports
import React, { Component } from 'react';
import './Resume.css';

// material imports
import Typography from '@material-ui/core/Typography';

class Resume extends Component {
  render() {
    return (
      <div id='resume'>
        <div className='mb'>
          <div id='resume-header'>
            <div id='resume-img'>
              <img src="avatar-full.png" alt="Chris McCauley"></img>
            </div>
            <div id='resume-intro'>
              <Typography variant='title'>Chris McCauley</Typography>
              <Typography variant='subheading' className='italic'>Web Developer</Typography>
              <div className='mb'>
                <Typography variant='body1'>
                  Recent graduate of Davis Technical College with certificates in 
                  software development, networking, and technical support. Lifelong 
                  interest in PC hardware, software, and networking, 2 years experience 
                  in professional technical support, and 10 years of professional 
                  production experience including CAD design and CNC programming.
                </Typography>
              </div>
            </div>
          </div>
          <hr />
          <div id='resume-contact'>
            <Typography>cdmccauley@gmail.com</Typography>
            <Typography>Salt Lake and Davis Counties, Utah</Typography>
            <Typography>cdmccauley.github.io</Typography>
          </div>
          <hr />
        </div>
        <div id='resume-cols'>
          <div className='mb'>
            <div id='resume-edu'>
              <Typography variant='body2' className='underline'>EDUCATION</Typography>
              <div className='mb'>
                <Typography variant='body2'>Information Technology</Typography>
                <Typography>Software Development</Typography>
                <Typography>Davis Technical College</Typography>
                <Typography className='italic'>2018</Typography>
              </div>
              <Typography variant='body2'>Architectural and Engineering Design</Typography>
              <Typography>Computer Aided Drafting</Typography>
              <Typography>Davis Technical College</Typography>
              <Typography className='italic'>2011</Typography>
            </div>
          </div>
          <div className='mb'>
            <div id='resume-cert'>
              <Typography variant='body2' className='underline'>CERTIFICATIONS</Typography>
              <Typography variant='body2'>Networking Fundamentals</Typography>
              <Typography>Microsoft Technical Associate</Typography>
              <Typography variant='body2'>Information Technology Fundamentals</Typography>
              <Typography>CompTIA</Typography>
              <Typography variant='body2'>Linux Essentials</Typography>
              <Typography>Net Dev Group</Typography>
            </div>
          </div>
          </div>
          <div className='mb'>
            <div id='resume-skills'>
              <Typography variant='body2' className='underline'>SKILLS</Typography>
              <div id='resume-skills-list'>
              <div className='resume-skills-set'>
              <Typography>JavaScript/ES6</Typography>
              <Typography>React</Typography>
              <Typography>Java</Typography>
              </div>
              <div className='resume-skills-set'>
              <Typography>C#</Typography>
              <Typography>PHP</Typography>
              <Typography>Android</Typography>
              </div>
              <div className='resume-skills-set'>
              <Typography>HTML5</Typography>
              <Typography>CSS3/SASS</Typography>
              <Typography>SQL/MySQL</Typography>
              </div>
              <div className='resume-skills-set'>
              <Typography>Git/GitHub</Typography>
              <Typography>Windows</Typography>
              <Typography>GNU/Linux</Typography>
              </div>
              <div className='resume-skills-set'>
              <Typography>Networking</Typography>
              <Typography>Troubleshooting</Typography>
              </div>
              </div>
            </div>
          </div>
          <div id='resume-xp'>
            <Typography variant='body2' className='underline'>EXPERIENCE</Typography>
            <Typography variant='body2'>CNC Operations Supervisor</Typography>
            <Typography>Insight Exhibits</Typography>
            <Typography className='italic'>Salt Lake City, Utah</Typography>
            <Typography className='italic'>2008-2016</Typography>
            {/* TODO: edit into bullet points */}
            <div className='mb'>
              <Typography>
                Managed and expanded all aspects of CNC operations during company’s period 
                of largest growth in 36 year history. Interpreted high-level design drawings, 
                created practical designs for use in construction of custom displays and 
                display elements using CAD software. Programmed GCode, operated multiple CNC 
                machines to manufacture parts using CNC software. Created, maintained and 
                performed systems maintenance and repair processes for CNC routers, vacuum 
                pumps, dust collectors, QNX (UNIX) systems and Windows systems. Responsible 
                for department logistics involving materials, tools and maintenance. Developed 
                material handling and recycling procedures to increase spending efficiency.
              </Typography>
            </div>
            <Typography variant='body2'>Technical Support Associate</Typography>
            <Typography>Unisys</Typography>
            <Typography className='italic'>Salt Lake City, Utah</Typography>
            <Typography className='italic'>2006-2008</Typography>
            <Typography>
              Technical support at primary help desk of major national financial investment 
              corporation. Single point-of-contact for troubleshooting any issue in the scope 
              of hardware, networking, proprietary software and custom software. Followed strict 
              regulatory compliance standards and security standards, passed multiple background 
              checks for financial sector and state governments. Created and maintained 
              troubleshooting processes for team use. Prior to promotion, performed duties as a 
              liaison for the data center and their clients, while handling workload overflow for 
              other teams.
            </Typography>
          </div>
      </div>
    );
  };
}

export default Resume;