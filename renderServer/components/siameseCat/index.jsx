import React from "react";
import styled from "styled-components";
import Title from "./title.jsx";
import SubTap from "./subTap.jsx";

function SiameseCat(props) {
  return (
    <CommonModule>
      <TopWrap>
          <Title />
<SubTap />
      </TopWrap>

      <ContentWrap>
        <CommonContentArea>xxx</CommonContentArea>
        <SimilarContentArea>xy</SimilarContentArea>
      </ContentWrap>
    </CommonModule>
  );
}

const CommonModule = styled.div`
  height: 724px;
  padding-bottom: 25px;
  border: 1px solid #e8ebee;
  border-radius: 6px;
  margin: 0 30px 0 30px;
  background-color: #f4f3f0;
`;

const TopWrap = styled.div`
  height: 114px;
  &:before {
    content: "";
    position: absolute;
    width: 670px;
    height: 2px;
    border-top: 1px solid #e8ebee;
    border-radius: 6px 6px 0 0;
    background-color: #e2dad1;
  }
`;

const ContentWrap = styled.div`
  height: 589px;
  padding-bottom: 20px;
  border: 0 1px 1px 1px;
`;

const CommonContentArea = styled.div`
  height: 363px;
  padding-bottom: 12px;
`;

const SimilarContentArea = styled.div`
  height: 213px;
  padding-bottom: 1px;
`;

export default SiameseCat;
