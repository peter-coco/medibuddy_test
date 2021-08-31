import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Actions from "../redux/actions";

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

  const [user] = useSelector<GlobalState, [UserAccount]>((state) => [
    state.userAccount,
  ]);

  const dispatch = useDispatch();

  const setUserPasswordFunc = (e: any) => {
    setUserPassword(e.target.value);
  };

  const setUserEmailFunc = (e: any) => {
    setUserEmail(e.target.value);
  };

  const checkValidUserAccound = (email: string, password: string) => {
    let passwordFormat = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{6,20}$/;
    let emailFormat =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    if (!passwordFormat.test(password)) {
      alert("대소문자 + 특수문자를 포함한 6자리 이상으로 입력하셔야 합니다.");
      return;
    } else if (!emailFormat.test(email)) {
      alert("이메일 형식으로 입력해주세요 !");
      return;
    } else {
      let userAccount = {
        email: email,
        password: password,
      };
      dispatch({
        type: Actions.SET_USER_ACCOUNT_VALUE,
        payload: { userAccount },
      });

      console.log(user);
    }
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
            onClick={() => checkValidUserAccound(userEmail, userPassword)}
          >
            로그인
          </LoginBtn>
        </LoginBtns>
      </LoginBtnsWrap>
    </LoginFormWrap>
  );
};
export default LoginForm;
