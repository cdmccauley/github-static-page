// default imports
import React, { Component } from 'react';
import './DrumMachine.css';

const keyCodes = {
  81: 'Q',
  87: 'W',
  69: 'E',
  65: 'A',
  83: 'S',
  68: 'D',
  90: 'Z',
  88: 'X',
  67: 'C'
}

class DrumMachine extends Component {

constructor(props) {
  super(props);
  this.padHandler = this.padHandler.bind(this);
  this.playClip = this.playClip.bind(this);
  this.updateDisplay = this.updateDisplay.bind(this);
  this.keyHandler = this.keyHandler.bind(this);
}

componentDidMount() {
  document.addEventListener('keydown', this.keyHandler);
}
componentWillUnmount() {
  document.removeEventListener('keydown', this.keyHandler);
}

keyHandler(props) {
  let key;
  if (props.keyCode) { // guard: development throws errors when switching between browser dev tools and regular page
    key = keyCodes[props.keyCode];
  }
  if (key) { // guard: development throws errors when switching between browser dev tools and regular page
    this.playClip(document.getElementById(key));
    this.updateDisplay(document.getElementById(key).parentNode.id);
  }
  
}

playClip(clip) {
  if (clip) { // guard: development throws errors when switching between browser dev tools and regular page
    clip.currentTime = 0;
    clip.play();
  }
}

updateDisplay(value) {
  document.getElementById('display').innerHTML = '<p>' + value + '</p>';
}

padHandler(props) {
  this.playClip(document.getElementById(props.target.id).childNodes[1]);
  this.updateDisplay(props.target.id);
}

render() {
  return <div id="drum-machine">
    <div id="display">
    </div>
    <div className="drum-pad" id="Heater-1" onClick={this.padHandler}>
      Q
      <audio type="audio/mpeg" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" id="Q" className="clip" />
    </div>
    <div className="drum-pad" id="Heater-2" onClick={this.padHandler}>
      W
      <audio type="audio/mpeg" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" id="W" className="clip" />
    </div>
    <div className="drum-pad" id="Heater-3" onClick={this.padHandler}>
      E
      <audio type="audio/mpeg" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" id="E" className="clip" />
    </div>
    <div className="drum-pad" id="Heater-4" onClick={this.padHandler}>
      A
      <audio type="audio/mpeg" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" id="A" className="clip" />
    </div>
    <div className="drum-pad" id="Clap" onClick={this.padHandler}>
      S
      <audio type="audio/mpeg" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" id="S" className="clip" />
    </div>
    <div className="drum-pad" id="Open High Hat" onClick={this.padHandler}>
      D
      <audio type="audio/mpeg" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" id="D" className="clip" />
    </div>
    <div className="drum-pad" id="Kick, High Hat" onClick={this.padHandler}>
      Z
      <audio type="audio/mpeg" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" id="Z" className="clip" />
    </div>
    <div className="drum-pad" id="Kick" onClick={this.padHandler}>
      X
      <audio type="audio/mpeg" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" id="X" className="clip" />
    </div>
    <div className="drum-pad" id="Closed High Hat" onClick={this.padHandler}>
      C
      <audio type="audio/mpeg" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" id="C" className="clip" />
    </div>
  </div>;
}
}

// ReactDOM.render(<DrumMachine />, document.getElementById('root'));

export default DrumMachine;