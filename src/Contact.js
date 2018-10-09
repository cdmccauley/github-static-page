import React, { Component } from 'react';
import './Contact.css';

// material-ui imports
import { Paper, Typography, Button, TextField } from '@material-ui/core';

class Contact extends Component {

  // TODO: 
  // https://github.com/dwyl/learn-to-send-email-via-google-script-html-no-server#spam-prevention
  // sendgrid, mailgun
  render() {
    return (
      <div id="contact">
        <Typography variant="display1" style={{ margin: '.25em 0' }}>Contact</Typography>
        <Paper style={{ padding: '.5em' }}>
          <form className="gform" action="https://script.google.com/macros/s/AKfycbzIN_aZimIjmUuCK9ATdBGJnmYQ9E4wj8ilOPf6rKhWpNzBvRfi/exec" method="POST">
            <div>
              <TextField className="text-field" name="name" label="Name" /> {/* name="name" */}
            </div>
            <div>
              <TextField className="text-field" name="email" label="E-mail" /> {/* name="_replyto" */}
            </div>
            <div>
              <TextField className="text-field" name="message" label="Message" multiline rows="4" /> {/* name="message" */}
            </div>
            <Button style={{ marginTop: '1em' }} type="submit" variant="contained" >Submit</Button>
          </form>
        </Paper>
      </div>
    );
  };

}

export default Contact;