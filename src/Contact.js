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
            <div className="form-elements">
            <label className="sr-only">Keep this field blank</label>
            <input style={{ display: "none" }} id="honeypot" type="text" name="honeypot" value="" />
              <div>
                <TextField className="text-field" name="name" label="Name" /> {/* name="name" */}
              </div>
              <div>
                <TextField className="text-field" name="email" label="E-mail" required /> {/* name="_replyto" */}
              </div>
              <div>
                <TextField className="text-field" name="message" label="Message" multiline rows="4" /> {/* name="message" */}
              </div>
              <Button style={{ marginTop: '1em' }} type="submit" variant="contained" >Submit</Button>
            </div>
            <div style={{ display: "none", textAlign: "center" }} className="thankyou_message">
              <Typography variant="display1">Thank you!</Typography>
            </div>
            <div style={{ display: "none", textAlign: "center" }} className="email-invalid">
              <Typography variant="title" style={{ color: "red" }}>Invalid Email Address</Typography>
            </div>
          </form>
        </Paper>
      </div>
    );
  };

}

export default Contact;