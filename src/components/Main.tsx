import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import MainForm from "./MainForm";
import { useSelector } from "react-redux";
import { GlobalState, UserAccount } from "../redux/reducer";

const MainBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background: #eaf2f7;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MainWrap = styled.div`
  width: 957px;
  height: 468px;
  background-color: #6f6a62;
  border-radius: 20px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
`;

const CancleBtnCircle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #c4c4c4;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  & > div {
    position: absolute;
    width: 30px;
    height: 5px;
    background-color: #6f6a62;
    border-radius: 20px;
  }
`;
const CancleBtnBarLeft = styled.div`
  transform: rotate(45deg);
`;

const CancleBtnBarRight = styled.div`
  transform: rotate(-45deg);
`;

const Main = () => {
  const [user] = useSelector<GlobalState, [UserAccount]>((state) => [
    state.userAccount,
  ]);

  const [userLoginState, setLoginState] = useState(false);

  useEffect(() => {
    const userAccount = window.sessionStorage.getItem("userAccount");
    if (userAccount) {
      setLoginState(JSON.parse(userAccount).loginState);
    }
  }, [user.loginState]);

  return userLoginState ? (
    <MainBackground>
      <MainWrap>
        <MainForm />
      </MainWrap>
    </MainBackground>
  ) : (
    <></>
  );
};
export default Main;
