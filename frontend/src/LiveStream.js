import React, { Component } from 'react';

class LiveStream extends Component {
  constructor(props){
    super(props);
    this.state = { time: Date.now() };

  }
  render(){
    return(
      <div> { this.state.time }

      <img src={`${'http://192.168.86.242/mjpeg_read.php?'}?${this.state.time}`}/>
      </div>
    );
  }
  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 500);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
}
export default LiveStream;

