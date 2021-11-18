import React from "react";
import styled from "styled-components";

function CommonContent(props) {
  return (
    <CommonContentArea>
      <PhotoList>
        <MainPhoto></MainPhoto>
        <SmallPhoto>1</SmallPhoto>
        <SmallPhoto>2</SmallPhoto>
        <SmallPhoto>3</SmallPhoto>
        <SmallPhoto>4</SmallPhoto>
        <SmallPhoto>5</SmallPhoto>
        <SmallPhoto>6</SmallPhoto>
      </PhotoList>
    </CommonContentArea>
  );
}

const CommonContentArea = styled.div`
  height: 363px;
  margin: 0 9px 12px 9px;
`;

const PhotoList = styled.ul`
  display: grid;
  grid-template-columns: auto auto auto auto;
  height: 261.6px;
  padding: 0;
  border-radius: 8px 8px 0 0;
  background-color: white;
  list-style-type: none;
`;

const MainPhoto = styled.li`
  width: 260.6px;
  height: 260.6px;
  border-radius: 8px 0 0 0;
  margin: 1px 0 0 1px;
  background-color: green;
  grid-row-start: 1;
  grid-row-end: 3;
`;

const SmallPhoto = styled.li`
  width: 129.8px;
  height: 129.8px;
  margin: 1px 0 0 1px;
background-color: red;
`;

export default CommonContent;
