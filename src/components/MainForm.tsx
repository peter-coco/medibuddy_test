import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MainFormWrap = styled.div`
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
const MainTitleWrap = styled.div`
  display: flex;
  width: 100%;
  height: 51px;
`;
const MainTitle = styled.div`
  width: 60%;
  height: 100%;
  text-align: center;
`;
const MainIdWrap = styled.div`
  display: flex;
  width: 100%;
  height: 51px;
`;
const MainIdTitle = styled.div`
  width: 40%;
  height: 51px;
  text-align: center;
`;
const MainIdInput = styled.div`
  width: 60%;
  height: 100%;
  background-color: #c4c4c4;
`;

const MainEmpty = styled.div`
  width: 40%;
  height: 51px;
`;

const MainForm = () => {
  return (
    <MainFormWrap>
      <MainTitleWrap>
        <MainEmpty />
        <MainTitle>Account</MainTitle>
      </MainTitleWrap>
      <MainIdWrap>
        <MainIdTitle>이메일</MainIdTitle>
        <MainIdInput></MainIdInput>
      </MainIdWrap>
    </MainFormWrap>
  );
};
export default MainForm;
