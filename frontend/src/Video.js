
import React from 'react';
import { Player, ControlBar } from 'video-react';
import DownloadButton from './DownloadButton';
import styled from "styled-components";

const Container = styled.div`
margin: 0 auto;
margin-bottom: 20px;
`;

function Video () {


return (
  <Container>
    <video width="90%" controls>
      <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" type="video/mp4" />
    </video>
  </Container>
  );


}

export default Video;
