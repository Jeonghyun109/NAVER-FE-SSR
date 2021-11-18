import React from "react";
import styled from "styled-components";

function Title(props) {
  return (
    <TitleArea>
      <MainTitle>샴(샤미즈)</MainTitle>
      <SubTitle>
        <SubTextSpan>동물</SubTextSpan>
        <SubBarSpan></SubBarSpan>
        <SubTextSpan>Siamese cat</SubTextSpan>
      </SubTitle>
    </TitleArea>
  );
}

const TitleArea = styled.div`
  height: 49px;
  padding: 18px 38px 15px 18px;
  margin-top: -1px;
`;

const MainTitle = styled.h2`
  height: 25px;
  margin: 2px 46px 0 0;
  line-height: 25px;
  font-size: 18px;
  letter-spacing: -0.25px;
`;

const SubTitle = styled.div`
  height: 18px;
  margin-top: 4px;
  color: #917659;
`;

const SubTextSpan = styled.span`
  line-height: 18px;
  font-size: 13px;
`;

const SubBarSpan = styled.span`
  display: inline-block;
  width: 1px;
  height: 10px;
  margin: 4px 7px 0 8px;
  background-color: rgba(166, 143, 116, 0.3);
`;

export default Title;
