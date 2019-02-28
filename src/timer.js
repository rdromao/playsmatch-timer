import React, { Component } from 'react';

const GAME_TIME_IN_SECS = 243

class Timer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        secsRemaining: GAME_TIME_IN_SECS,
        playing: false,
      };


      let audio4 = new Audio('audio/4minutes.mp3')
      let audio2 = new Audio('audio/2minutes.mp3')
      let audio1 = new Audio('audio/1minute.mp3')
      let audioHalf = new Audio('audio/30seconds.mp3')
      let audioFinal = new Audio('audio/final.mp3')
      
  
      // Countdown
      setInterval(() => {
        if (this.state.playing) {
          this.setState({ secsRemaining: this.state.secsRemaining - 1 | 0 });
          if(this.state.secsRemaining === 0){
            this.setState({ playing: false });
            this.setState({ secsRemaining: GAME_TIME_IN_SECS });
          }else if(this.state.secsRemaining === 240){
            audio4.play()
          }else if(this.state.secsRemaining === 120){
            audio2.play()
          }else if(this.state.secsRemaining === 60){
            audio1.play()
          }else if(this.state.secsRemaining === 30){
            audioHalf.play()
          }else if(this.state.secsRemaining === 10){
            audioFinal.play()
          }
        }
      }, 1000);
    }
  
    _handlePlayPause = () => {
      this.setState({ playing: !this.state.playing });
    };
  
    _handleReset = () => {
      this.setState({ playing: false, secsRemaining: GAME_TIME_IN_SECS });
    };
  
  
    render() {
      return (
        <div className='appTimerContainer'>
          <div className='appTimer'>
            {Math.floor(this.state.secsRemaining / 60)}
            :
            {Math.floor(this.state.secsRemaining % 60) >= 10
              ? Math.floor(this.state.secsRemaining % 60)
              : '0' + Math.floor(this.state.secsRemaining % 60)}
          </div>
          <div className='timerButtonsContainer'>
            <div className='timerControlButton' onClick={this._handlePlayPause}>{this.state.playing ? "Pause":"Play"}</div>
            <div className='timerControlButton' onClick={this._handleReset}>Reset</div>
          </div>
        </div>
      );
    }
  }

  export default Timer