import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import MainForm from "./MainForm";
import { useDispatch, useSelector } from "react-redux";
import { GlobalState, UserAccount } from "../redux/reducer";
import Actions from "../redux/actions";

const MainBackground = styled.div`
  width: 100%;
  height: 100%;
  background: #eaf2f7;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
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

const LogoutBtn = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 100px;
  height: 40px;
  border-radius: 20px;
  background-color: #c4c4c4;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #000000;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
`;

const Main = () => {
  const [user] = useSelector<GlobalState, [UserAccount]>((state) => [
    state.userAccount,
  ]);
  const dispatch = useDispatch();

  const [userLoginState, setLoginState] = useState(false);

  useEffect(() => {
    const userAccount = window.sessionStorage.getItem("userAccount");
    if (userAccount) {
      setLoginState(JSON.parse(userAccount).loginState);
    }
  }, [user.loginState]);

  const logout = () => {
    dispatch({
      type: Actions.SET_LOGOUT,
    });
    window.sessionStorage.removeItem("userAccount");
  };

  return userLoginState ? (
    <MainBackground>
      <MainWrap>
        <LogoutBtn onClick={logout}>로그아웃</LogoutBtn>
        <MainForm />
      </MainWrap>
    </MainBackground>
  ) : (
    <></>
  );
};
export default Main;
