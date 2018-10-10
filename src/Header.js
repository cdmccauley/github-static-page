// default imports
import React, { Component } from 'react';
import './Header.css';

// react-router-dom imports
import { Link } from 'react-router-dom';

// material imports
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

// fontawesome imports
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { 
  faGithub, 
  faFreeCodeCamp, 
  faCodepen, 
  faLinkedin 
} from '@fortawesome/free-brands-svg-icons';

// call library.add to include icons
library.add(faEllipsisV, faGithub, faFreeCodeCamp, faCodepen, faLinkedin);

class Header extends Component {

  // initialize state, required for menu
  state = {
    anchorEl: null,
  };

  // handles menu anchoring
  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  // handles menu close after click
  handleClose = (event) => {
    this.setState({ anchorEl: null });
  };

  render() {

    // declarations
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    
    return (
      <AppBar position="static">
        <Toolbar id="toolbar">
          <Typography id="title-typography" variant="display1">{ "\{ m \}" }</Typography>
          <IconButton aria-owns={open ? 'menu-appbar' : null } aria-haspopup="true" 
            onClick={this.handleMenu}>
            <FontAwesomeIcon icon={faEllipsisV} className="icon-style" style={{ width: 'auto', paddingLeft: '8px', paddingRight: '8px' }} />
          </IconButton>
          <Menu id="menu-appbar" anchorEl={anchorEl} 
            anchorOrigin={{ vertical: 'top', horizontal: 'right', }} 
            transformOrigin={{ vertical: 'top', horizontal: 'right', }} 
            open={open} onClose={this.handleClose}>

            <Link to='/'>
              <MenuItem onClick={this.handleClose} id='menu-home'>
                <Typography variant="subheading">Home</Typography>
              </MenuItem>
            </Link>

            <Link to='/portfolio'>
              <MenuItem onClick={this.handleClose} id='menu-portfolio'>
                <Typography variant="subheading">Portfolio</Typography>
              </MenuItem>
            </Link>
            
            {/* <Link to='/resume'> */}
            <a href="https://mccauley.tech/resume" target="_blank" rel="noopener noreferrer">
              <MenuItem onClick={this.handleClose} id='menu-resume'>
                <Typography variant="subheading">Resume</Typography>
              </MenuItem>
            </a>
            {/* </Link> */}

            <Link to='/contact'>
              <MenuItem onClick={this.handleClose} id='menu-contact'>
                <Typography variant="subheading">Contact</Typography>
              </MenuItem>
            </Link>

            <hr />

            <a href="https://codepen.io/cdmccauley/" target="_blank" rel="noopener noreferrer">
              <MenuItem onClick={this.handleClose} id='menu-codepen'>
                <FontAwesomeIcon icon={faCodepen} className="menu-icon" />
                <Typography variant="subheading">CodePen</Typography>
              </MenuItem>
            </a>

            <a href="https://www.freecodecamp.org/cdmccauley" target="_blank" rel="noopener noreferrer">
              <MenuItem onClick={this.handleClose} id='menu-freecodecamp'>
                <FontAwesomeIcon icon={faFreeCodeCamp} className="menu-icon" />
                <Typography variant="subheading">freeCodeCamp</Typography>
              </MenuItem>
            </a>

            <a href="https://github.com/cdmccauley" target="_blank" rel="noopener noreferrer">
              <MenuItem onClick={this.handleClose} id='menu-github'>
                <FontAwesomeIcon icon={faGithub} className="menu-icon" />
                <Typography variant="subheading">GitHub</Typography>
              </MenuItem>
            </a>
              
            <a href="https://www.linkedin.com/in/mccauleytech/" target="_blank" rel="noopener noreferrer">
              <MenuItem onClick={this.handleClose} id='menu-linkedin'>
                <FontAwesomeIcon icon={faLinkedin} className="menu-icon" />
                <Typography variant="subheading">LinkedIn</Typography>
              </MenuItem>
            </a>
          </Menu>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;