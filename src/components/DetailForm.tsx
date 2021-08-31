import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DetailFormWrap = styled.div`
  width: 530px;
  height: 220px;
  display: flex;
  flex-direction: column;
  position: relative;
  top: -20px;
  left: -60px;
  gap: 20px;
  justify-content: center;
  & div {
    font-size: 30px;
    color: #fff;
  }
`;
const DetailTitleWrap = styled.div`
  display: flex;
  width: 100%;
  height: 51px;
`;
const DetailTitle = styled.div`
  width: 60%;
  height: 100%;
  text-align: center;
`;
const DetailIdWrap = styled.div`
  display: flex;
  width: 100%;
  height: 51px;
`;
const DetailIdTitle = styled.div`
  width: 40%;
  height: 51px;
  text-align: center;
`;
const DetailIdInput = styled.div`
  width: 60%;
  height: 100%;
  background-color: #c4c4c4;
`;

const DetailEmpty = styled.div`
  width: 40%;
  height: 51px;
`;

const DetailBtnsWrap = styled.div`
  display: flex;
  width: 100%;
  height: 51px;
`;
const DetailBtn = styled.div``;
const DetailBtns = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  height: 100%;

  & div {
    width: 100%;
    height: 100%;
    background-color: #b2a20c;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    color: #000000;
    font-weight: 600;
  }
`;

const DetailForm = () => {
  return (
    <DetailFormWrap>
      <DetailTitleWrap>
        <DetailEmpty />
        <DetailTitle>개인 정보 수정</DetailTitle>
      </DetailTitleWrap>
      <DetailIdWrap>
        <DetailIdTitle>이메일</DetailIdTitle>
        <DetailIdInput></DetailIdInput>
      </DetailIdWrap>
      <DetailBtnsWrap>
        <DetailEmpty />
        <DetailBtns>
          <DetailBtn>이메일 수정</DetailBtn>
        </DetailBtns>
      </DetailBtnsWrap>
    </DetailFormWrap>
  );
};
export default DetailForm;
