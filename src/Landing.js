// default imports
import React, { Component } from 'react';
import './Landing.css';

// material imports
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

// fontawesome imports
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { faJava, faJs, faReact, faHtml5, faCss3, faAndroid, faAngular, faSass, faPhp } from '@fortawesome/free-brands-svg-icons';

library.add(faJava, faHashtag, faJs, faReact, faHtml5, faCss3, faSass, faAndroid, faAngular, faPhp);

class Landing extends Component {

  render() {
    return (

      <div id="landing">
        <Typography variant="display1" style={{ margin: '.25em 0' }}>Welcome</Typography>
        <Paper id="paper">
          <img src="avatar-full.png" alt="Chris McCauley"></img>
          <div>
            <Typography id="landing-name" variant="headline">Chris McCauley</Typography>
            <Typography id="landing-title" variant="subheading">Software Developer</Typography>
            <div id="icons">
              <FontAwesomeIcon icon={faJava} className="icon-style" />
              <FontAwesomeIcon icon={faHashtag} className="icon-style" />
              <FontAwesomeIcon icon={faAndroid} className="icon-style" />
              <FontAwesomeIcon icon={faPhp} className="icon-style" />
              <FontAwesomeIcon icon={faJs} className="icon-style" />
              <FontAwesomeIcon icon={faReact} className="icon-style" />
              <FontAwesomeIcon icon={faAngular} className="icon-style" />
              <FontAwesomeIcon icon={faHtml5} className="icon-style" />
              <FontAwesomeIcon icon={faCss3} className="icon-style" />
              <FontAwesomeIcon icon={faSass} className="icon-style" />
            </div>
          </div>
        </Paper>
        <Typography id="intro">
          Lifelong tech enthusiast and recent graduate from Davis Technical College's Information Technology program with an emphasis in Software Development. I have experience developing with Java, C#, PHP, HTML, CSS, and MySQL, for Linux, Windows, and Android. I have also spent time learning JavaScript, ES6, TypeScript, JQuery, React, Node, Angular, and Ruby and have earned certifications from CompTIA, Microsoft, and NDG. Please, have a look around to learn about me and my studies. Feel free to contact me with any questions.
        </Typography>
      </div>

    );
  }
}

export default Landing;