import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

  // const [user, loginState] = useSelector<GlobalState, [UserAccount, boolean]>(
  //   (state) => [state.userAccount, state.loginState]
  // );

  const dispatch = useDispatch();

  const setUserPasswordFunc = (e: any) => {
    setUserPassword(e.target.value);
  };

  const setUserEmailFunc = (e: any) => {
    setUserEmail(e.target.value);
  };

  const checkValidUserAccount = (email: string, password: string) => {
    const isValidPassword = checkValidPassword(password);
    const isValidEmail = checkValidEmail(email);

    if (!isValidPassword && isValidEmail) {
      alert(
        "password error : 대소문자 + 특수문자를 포함한 6자리 이상으로 입력"
      );
      return;
    } else if (isValidPassword && !isValidEmail) {
      alert("email error : 이메일주소 형식으로 입력");
      return;
    } else if (!isValidPassword && !isValidEmail) {
      alert(
        "password error : 대소문자 + 특수문자를 포함한 6자리 이상으로 입력 \n email error : 이메일주소 형식으로 입력"
      );
      return;
    }

    const userAccount = {
      email: email,
      password: password,
      loginState: true,
    };
    loginFunc(email, password);
    window.sessionStorage.setItem("userAccount", JSON.stringify(userAccount));
  };

  const loginFunc = (email: string, password: string) => {
    let userAccount = {
      email: email,
      password: password,
      loginState: true,
    };
    dispatch({
      type: Actions.SET_USER_ACCOUNT_VALUE,
      payload: { userAccount },
    });
  };

  return (
    <LoginFormWrap>
      <LoginTitleWrap>
        <LoginEmpty />
        <LoginTitle>로그인</LoginTitle>
      </LoginTitleWrap>
      <LoginIdWrap>
        <LoginIdTitle>이메일</LoginIdTitle>
        <LoginIdInput
          placeholder="이메일 형식으로 입력"
          onChange={setUserEmailFunc}
        ></LoginIdInput>
      </LoginIdWrap>
      <LoginPWWrap>
        <LoginPWTitle>비밀번호</LoginPWTitle>
        <LoginPWInput
          placeholder="영문+특수문자 포함 6자리 입력"
          onChange={setUserPasswordFunc}
        ></LoginPWInput>
      </LoginPWWrap>
      <LoginBtnsWrap>
        <LoginEmpty />

        <LoginBtns>
          <LoginBtn
            onClick={() => checkValidUserAccount(userEmail, userPassword)}
          >
            로그인
          </LoginBtn>
        </LoginBtns>
      </LoginBtnsWrap>
    </LoginFormWrap>
  );
};
export default LoginForm;
