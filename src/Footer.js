// default imports
import React, { Component } from 'react';
import './Footer.css';

// react-router-dom imports
import { Link } from 'react-router-dom';

// material imports
import Typography from '@material-ui/core/Typography';

class Footer extends Component {

  render() {
    return (

      <div id="footer">
        <div id="about-me">
          <hr />
          <Typography id="footer-logo" variant="display1">{ "\{ m \}" }</Typography>
          <Typography>
            Chris McCauley is a software developer currently looking for a team to join that lives and studies in the Davis and Salt Lake counties of northern Utah, USA.
          </Typography>
          <div id="social-nav">
            <a href="https://codepen.io/cdmccauley/" target="_blank" rel="noopener noreferrer">CodePen</a>
            <span> / </span>
            <a href="https://www.freecodecamp.org/cdmccauley" target="_blank" rel="noopener noreferrer">freeCodeCamp</a>
            <span> / </span>
            <a href="https://github.com/cdmccauley" target="_blank" rel="noopener noreferrer">GitHub</a>
            <span> / </span>
            <a href="https://www.linkedin.com/in/mccauleytech/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <hr />
        </div>
        <div id="site-nav">
          <Typography variant="title">mccauley.tech</Typography>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><a href="https://mccauley.tech/resume" target="_blank" rel="noopener noreferrer">Resume</a></li>
            <li><a href="https://mccauley.tech/contact" target="_blank" rel="noopener noreferrer">Contact</a></li>
            {/* <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/contact">Contact</Link></li> */}
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;