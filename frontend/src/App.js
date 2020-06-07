import React, { Component } from 'react' 
import logo from './logo.svg' 
import './App.css' 
import Navbar from './Navbar' 
import Footer from './Footer' 
import Video from './Video'  
import styled from 'styled-components' 
import LiveStream from './LiveStream' 
import StartGlimpse from './StartGlimpse'
import TakeStill from './TakeStill'
import StartRecord from './StartRecord'
import StartUpload from './StartUpload'
import EmailLast from './EmailLast'

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

  render() {
    return (
      <Container>
      <Navbar />
      <LiveStream />
      <ViewGallery>View ViewGallery</ViewGallery>
      <ButtonGrid>
        <StartGlimpse />
        <TakeStill />
        <StartRecord />
        <StartUpload />
        <EmailLast />
      </ButtonGrid>
</Container>
    )
  }
}
export default App
