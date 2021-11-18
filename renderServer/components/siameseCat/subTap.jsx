import React from "react";
import styled from "styled-components";

function SubTap(props) {
  return (
    <SubTapArea>
      <ScrollMainTap>
        <TapList>
          <TapEntire>
            <LinkEntire>
              <TapText>전체</TapText>
            </LinkEntire>
          </TapEntire>
          <TapBasicInfo>
            <LinkBasicInfo>
              <TapText>기본정보</TapText>
            </LinkBasicInfo>
          </TapBasicInfo>
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
  width: 63.32px;
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

const TapText = styled.span`
  font-size: 13px;
  line-height: 28px;
`;

const TapBasicInfo = styled.li`
  width: 72.32px;
  height: 29px;
  margin: 0 1.5px 0 1.5px;
`;

const LinkBasicInfo = styled.a`
  display: flex;
  margin-top: 1px;
  color: #917659;
  justify-content: center;
  cursor: pointer;
`;

export default SubTap;
