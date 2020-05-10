import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  background-color: lightgrey;
  padding: 10px;
`;

const Button = styled.button`
  font-size: 22px;
`;


function NavBar () {

  return (
    <Container>
      <Button>Set Up Wifi</Button>
      <p>Battery: 10%</p>
    </Container>
  );

}

export default NavBar;
