import React, { Component } from 'react';
import styled from "styled-components";

const Container = styled.div`
margin: 0 auto;
margin-bottom: 20px;
`;


class LiveStream extends Component {
  constructor(props){
    super(props);
    this.state = { time: Date.now() };

  }
  render(){
    return(
      <Container>

      <img src={`${'http://192.168.86.242/mjpeg_read.php?'}?${this.state.time}`} width="90%"/>
      </Container>
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

