import React from "react";
import styled from "styled-components";
import SiameseCat from "../siameseCat/index";
import News from "../news/index";

function App(props) {
  const Heading = styled.h1`
    color: ${props.body.color};
  `;

  return (
    <Container>
      <Heading>Hello, World!</Heading>
      <SiameseCat />
      <News />
    </Container>
  );
}

const Container = styled.div`
  width: 732px;
`;

export default App;
