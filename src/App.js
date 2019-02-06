import React, { Component } from 'react';
import Tone from 'tone';

import webAudioTouchUnlock from './webAudioTouchUnlock';

import './App.css';

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
    this.setState({ x, y });
  };

  onTouchMove = ({ touches }) => {
    const { clientX: x, clientY: y } = touches[0];
    this.setState({ x, y });
  };

  componentDidMount() {
    webAudioTouchUnlock(Tone.context).then(
      () => (this.synth = new Tone.AMSynth().toMaster())
    );
  }

  render() {
    const { on, x, y } = this.state;
    on && this.synth && this.synth.triggerAttackRelease(x, '8n');
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
