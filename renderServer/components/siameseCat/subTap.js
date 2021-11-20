import React from "react";
import styled from "styled-components";

function SubTap(props) {
  return (
    <SubTapArea>
      <ScrollMainTap>
        <TapList>
          <TapEntire>
            <LinkEntire>
              <SubTapText>전체</SubTapText>
            </LinkEntire>
          </TapEntire>
          <TapBasicInfo>
            <LinkBasicInfo>
              <SubTapText>기본정보</SubTapText>
            </LinkBasicInfo>
          </TapBasicInfo>
          <TapPhoto>
            <LinkPhoto>
              <SubTapBar />
              <SubTapText>포토</SubTapText>
            </LinkPhoto>
          </TapPhoto>
          <TapSimilar>
            <LinkSimilar>
              <SubTapBar />
              <SubTapText>함께 찾은 품종</SubTapText>
            </LinkSimilar>
          </TapSimilar>
        </TapList>
      </ScrollMainTap>
    </SubTapArea>
  );
}

const SubTapArea = styled.div`
  height: 49px;
  margin-top: -17px;
`;

const ScrollMainTap = styled.div`
  height: 38px;
  padding-bottom: 11px;
`;

const TapList = styled.ul`
  display: flex;
  height: 30px;
  padding: 0;
  margin-top: 8px;
  list-style-type: none;
`;

const TapEntire = styled.li`
  height: 29px;
  margin-right: 1.5px;
`;

const LinkEntire = styled.a`
  display: flex;
  border-radius: 3px;
  margin: 1px 0 0 18px;
  color: #fff;
  font-weight: bold;
  background-color: #a68f74;
  justify-content: center;
  cursor: pointer;
`;

const SubTapText = styled.span`
  padding: 0 11px;
  font-size: 13px;
  line-height: 28px;
`;

const TapBasicInfo = styled.li`
  height: 29px;
  margin: 0 1.5px;
`;

const LinkBasicInfo = styled.a`
  margin-top: 1px;
  color: #917659;
  cursor: pointer;
`;

const TapPhoto = styled.li`
  height: 29px;
  margin: 0 1.5px;
`;

const LinkPhoto = styled.a`
  margin-top: 1px;
  color: #917659;
  cursor: pointer;
`;

const SubTapBar = styled.span`
  display: inline-block;
  width: 1px;
  height: 11px;
  margin: 0 3px 0 1px;
  background-color: rgba(166, 143, 116, 0.3);
`;

const TapSimilar = styled.li`
  height: 29px;
  margin-left: 1.5px;
`;

const LinkSimilar = styled.a`
  margin-top: 1px;
  color: #917659;
  cursor: pointer;
`;

export default SubTap;
