import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Chat from './Chat'
import Navbar from './Navbar'
import Footer from './Footer'
import Video from './Video'
import styled from 'styled-components'
import LiveStream from './LiveStream'


const Container = styled.div`
  text-align: center;
 `;

 const ViewGallery = styled.button`
  background-color: lightgrey;
  width: 100%;
`;

const ButtonGrid = styled.div`
display: flex;
justify-content:  space-evenly;
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
        <StyledButton>Test1</StyledButton>
        <StyledButton>Test1</StyledButton>
        <StyledButton>Test1</StyledButton>
        <StyledButton>Test1</StyledButton>
        <StyledButton>Test1</StyledButton>
        <StyledButton>Test1</StyledButton>
        <StyledButton>Test1</StyledButton>
        <StyledButton>Test1</StyledButton>
        </ButtonGrid>
        <Chat />

  
</Container>
    )
  }
}

export default App
