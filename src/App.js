import React, { Component } from 'react';
import Tone from 'tone';

import './App.css';

const synth = new Tone.AMSynth().toMaster();

class App extends Component {
  state = {
    on: false,
    x: 0,
    y: 0,
  };

  toggleOnOff = () => {
    this.setState(({ on }) => {
      if (!on) {
        const result = window.confirm('This app makes noise! Is this ok?');
        return result ? { on: true } : null;
      }
      return { on: false };
    });
  };

  onMouseMove = ({ clientX: x, clientY: y }) => {
    synth.triggerAttackRelease(x, '8n');
    this.setState({ x, y });
  };

  onTouchMove = ({ touches }) => {
    const { clientX: x, clientY: y } = touches[0];
    synth.triggerAttackRelease(x, '8n');
    this.setState({ x, y });
  };

  render() {
    const { on, x, y } = this.state;
    return (
      <div
        className="App"
        onMouseMove={on ? this.onMouseMove : () => null}
        onTouchMove={on ? this.onTouchMove : () => null}
      >
        <h1>Mousical</h1>
        <button onClick={this.toggleOnOff} className="StartBtn">
          {on ? 'Stop' : 'Start'}
        </button>
        <div
          style={{ visibility: on ? 'visible' : 'hidden' }}
        >{`Frequency: ${x}Hz`}</div>
      </div>
    );
  }
}

export default App;
