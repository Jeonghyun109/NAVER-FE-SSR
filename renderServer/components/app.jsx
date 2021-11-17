import React from "react";
import styled from "styled-components";

function App(props) {
  const Heading = styled.h1`
    color: ${props.body.color};
  `;

  return <Heading>Hello, World!</Heading>;
}

export default App;
