import React, { Component } from 'react';
import './Contact.css';

// material-ui imports
import { Paper, Input, Typography, Button, TextField } from '@material-ui/core';

class Contact extends Component {

  render() {
    return (
      <div id="contact">
        <Typography variant="display1" style={{ margin: '.25em 0' }}>Contact</Typography>
        <Paper style={{ padding: '.5em' }}>
          <form action="https://formspree.io/cdmccauley@gmail.com" method="POST">
            <div>
              <TextField className="text-field" name="name" label="Name" /> {/* name="name" */}
            </div>
            <div>
              <TextField className="text-field" name="_replyto" label="E-mail" /> {/* name="_replyto" */}
            </div>
            <div>
              <TextField className="text-field" name="message" label="Message" multiline rows="4" /> {/* name="message" */}
            </div>
            <Button style={{ marginTop: '1em' }} type="submit" variant="contained" >Submit</Button>
            <input type="hidden" name="_next" value="https://cdmccauley.github.io/thanks" />
            <input type="hidden" name="_subject" value="Contact Submission" />
            <input type="text" name="_gotcha" style={{ display: "none" }} />
          </form>
        </Paper>
      </div>
    );
  };

}

export default Contact;