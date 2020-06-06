import React, { Component } from 'react' 
import logo from './logo.svg' 
import './App.css' 
import Navbar from './Navbar' 
import Footer from './Footer' 
import Video from './Video' 
import OGVideo from './OGVideo' 
import VideoGrid from './VideoGrid' 
import styled from 'styled-components' 
import LiveStream from './LiveStream' 

const URL = 'ws://192.168.86.239:4030'

const Container = styled.div`
  text-align: center;
 `;

const ViewGallery = styled.button`
  background-color: lightgrey;
  width: 100%; 
`; 

const ButtonGrid = styled.div`
   display: flex; 
   justify-content: space-evenly;
   margin-top: 50px; 
   margin-bottom: 50px; 
   flex-wrap: wrap; 
`; 

const StyledButton = styled.button` 
   width: 100px; 
   height: 100px; 
   margin-top: 15px; 
   margin-bottom: 15px; 
`; 

class App extends Component {
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
  startGlimpse = () => {
    // on submitting the ChatInput form, send the message, add it to the list and reset the input
    this.ws.send(JSON.stringify('startGlimpse'))
  }

  render() {
    return (
      <Container>
      <Navbar />
      <LiveStream />
      <ViewGallery>View ViewGallery</ViewGallery>
      <ButtonGrid>
        <StyledButton onTouchStart={this.startGlimpse}>Active</StyledButton>
        <StyledButton>Test1</StyledButton>
        <StyledButton>Test1</StyledButton>
        <StyledButton>Test1</StyledButton>
        <StyledButton>Test1</StyledButton>
        <StyledButton>Test1</StyledButton>
        <StyledButton>Test1</StyledButton>
        <StyledButton>Test1</StyledButton>
        </ButtonGrid>
      </Container>
    )
  }
}
export default App
