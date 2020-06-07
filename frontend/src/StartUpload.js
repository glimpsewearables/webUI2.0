import React, { Component } from 'react'
import styled from 'styled-components'


const URL = 'ws://192.168.86.242:3050'
const Container = styled.div`
  text-align: center;
 `;

 const StyledButton = styled.button`
 width: 100px;
 height: 100px;
 margin-top: 15px;
 margin-bottom: 15px;
 `;

class StartUpload extends Component {

  ws = new WebSocket(URL)

  componentDidMount() {
    this.ws.onopen = () => {
      // on connecting, do nothing but log it to the console
      console.log('connected')
    }


    this.ws.onmessage = evt => {
      // on receiving a message, add it to the list of messages
      const message = JSON.parse(evt.data)
      console.log(message)
    }

    this.ws.onclose = () => {
      console.log('disconnected')
      // automatically try to reconnect on connection loss
      this.setState({
        ws: new WebSocket(URL),
      })
    }
  }


  startUpload = () => {
    // on submitting the ChatInput form, send the message, add it to the list and reset the input
    this.ws.send(JSON.stringify('startUpload'))

  }



  render() {
    return (
      <Container>

        <StyledButton onTouchStart={this.startUpload}>StartUpload</StyledButton>
</Container>
    )
  }
}

export default StartUpload

