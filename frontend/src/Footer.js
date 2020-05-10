import React from "react";
import styled from "styled-components";

const Container = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: lightgrey;
    color: white;
    text-align: center;
`;

const Button = styled.button`
  font-size: 22px;
`;


function Footer () {

  return (
    <Container>
      <Button>Calibration</Button>
    </Container>
  );

}

export default Footer;
