import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Actions from "../redux/actions";

import {
  checkValidEmail,
  checkValidPassword,
} from "../utils/checkValidAccount";

import { GlobalState, UserAccount } from "../redux/reducer";

const LoginFormWrap = styled.div`
  width: 530px;
  height: 320px;
  display: flex;
  flex-direction: column;
  position: relative;
  left: -60px;
  gap: 20px;
  justify-content: center;
  & div {
    font-size: 30px;
    color: #fff;
  }
`;
const LoginTitleWrap = styled.div`
  display: flex;
  width: 100%;
  height: 51px;
`;
const LoginTitle = styled.div`
  width: 60%;
  height: 100%;
  text-align: center;
`;
const LoginIdWrap = styled.div`
  display: flex;
  width: 100%;
  height: 51px;
`;
const LoginIdTitle = styled.div`
  width: 40%;
  height: 51px;
  text-align: center;
  line-height: 51px;
`;
const LoginIdInput = styled.input`
  width: 60%;
  height: 100%;
  background-color: #c4c4c4;
  font-size: 20px;
  padding: 10px;
  box-sizing: border-box;
  border: 0px;

  &:placeholder {
    font-style: italic;
  }
`;
const LoginPWWrap = styled.div`
  display: flex;
  width: 100%;
  height: 51px;
`;
const LoginPWTitle = styled.div`
  width: 40%;
  height: 51px;
  text-align: center;
  line-height: 51px;
`;
const LoginPWInput = styled.input`
  width: 60%;
  height: 100%;
  background-color: #c4c4c4;
  font-size: 20px;
  padding: 10px;
  box-sizing: border-box;
  border: 0px;

  &:placeholder {
    font-style: italic;
  }
`;
const LoginBtnsWrap = styled.div`
  display: flex;
  width: 100%;
  height: 51px;
`;
const LoginBtn = styled.div``;
const LoginBtns = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  height: 100%;

  & div {
    cursor: pointer;
    width: 100%;
    height: 100%;
    background-color: #4abd5c;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    color: #000000;
    font-weight: 600;
  }
`;
const LoginEmpty = styled.div`
  width: 40%;
  height: 51px;
`;

const LoginForm = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const dispatch = useDispatch();
  const [user] = useSelector<GlobalState, [UserAccount]>((state) => [
    state.userAccount,
  ]);

  const setUserPasswordFunc = (e: any) => {
    setUserPassword(e.target.value);
  };

  const setUserEmailFunc = (e: any) => {
    setUserEmail(e.target.value);
  };

  const checkValidUserAccount = (email: string, password: string) => {
    const isValidPassword = checkValidPassword(password);
    const isValidEmail = checkValidEmail(email);

    const passwordErrorMsg =
      "password error : ???????????? + ??????????????? ????????? 6?????? ???????????? ??????";
    const emailErrorMsg = "email error : ??????????????? ???????????? ??????";

    if (!isValidPassword && isValidEmail) {
      alert(passwordErrorMsg);
      return;
    } else if (isValidPassword && !isValidEmail) {
      alert(emailErrorMsg);
      return;
    } else if (!isValidPassword && !isValidEmail) {
      alert(passwordErrorMsg + "\n" + emailErrorMsg);
      return;
    }

    login(email, password);
  };

  const login = (email: string, password: string) => {
    let userAccount = {
      email: email,
      password: password,
      loginState: true,
    };
    if (email !== user.email || password !== user.password) {
      const errorLoginIssue = "????????? ????????? ?????? ????????????";
      alert(errorLoginIssue);
      return;
    }

    dispatch({
      type: Actions.SET_LOGIN_PASS,
      payload: { userAccount },
    });
    window.sessionStorage.setItem("userAccount", JSON.stringify(userAccount));
  };

  return (
    <LoginFormWrap>
      <LoginTitleWrap>
        <LoginEmpty />
        <LoginTitle>?????????</LoginTitle>
      </LoginTitleWrap>
      <LoginIdWrap>
        <LoginIdTitle>?????????</LoginIdTitle>
        <LoginIdInput
          placeholder="????????? ???????????? ??????"
          onChange={setUserEmailFunc}
        ></LoginIdInput>
      </LoginIdWrap>
      <LoginPWWrap>
        <LoginPWTitle>????????????</LoginPWTitle>
        <LoginPWInput
          placeholder="??????+???????????? ?????? 6?????? ??????"
          onChange={setUserPasswordFunc}
        ></LoginPWInput>
      </LoginPWWrap>
      <LoginBtnsWrap>
        <LoginEmpty />

        <LoginBtns>
          <LoginBtn
            onClick={() => checkValidUserAccount(userEmail, userPassword)}
          >
            ?????????
          </LoginBtn>
        </LoginBtns>
      </LoginBtnsWrap>
    </LoginFormWrap>
  );
};
export default LoginForm;
