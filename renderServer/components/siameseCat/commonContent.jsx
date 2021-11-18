import React from "react";
import styled from "styled-components";

function CommonContent(props) {
  return (
    <CommonContentArea>
      <PhotoList>
        <MainPhoto>
          <LinkMainPhoto>
            <img
              src="https://search.pstatic.net/common?type=f&amp;size=518x522&amp;quality=95&amp;direct=true&amp;src=http%3A%2F%2Fshop1.phinf.naver.net%2F20210110_224%2F1610262906543iYaiJ_JPEG%2F46398515690451726_622079393.jpeg"
              style={{
                width: "260.6px",
                height: "260.6px",
                borderRadius: "8px 0 0 0",
              }}
            />
          </LinkMainPhoto>
        </MainPhoto>
        <SmallPhoto>1</SmallPhoto>
        <SmallPhoto>2</SmallPhoto>
        <SmallPhoto>
          <img
            src="https://search.pstatic.net/common?type=f&amp;size=260x260&amp;quality=95&amp;direct=true&amp;src=http%3A%2F%2Fshop1.phinf.naver.net%2F20200401_12%2F1585730100281Sa5Vj_JPEG%2F21865709587741555_647870209.jpg"
            style={{
              width: "129.8px",
              height: "129.8px",
              borderRadius: "0 8px 0 0",
            }}
          />
        </SmallPhoto>
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
  margin: 1px 0 0 1px;
  grid-row-start: 1;
  grid-row-end: 3;
`;

const SmallPhoto = styled.li`
  width: 129.8px;
  height: 129.8px;
  margin: 1px 0 0 1px;
  background-color: red;
`;

const LinkMainPhoto = styled.a`
  display: block;
  cursor: pointer;
`;

export default CommonContent;
