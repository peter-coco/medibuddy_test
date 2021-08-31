import React, { useEffect } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import LoginForm from "./LoginForm";

const LoginBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background: #eaf2f7;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LoginWrap = styled.div`
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

const Login = () => {
  return (
    <LoginBackground>
      <LoginWrap>
        {/* <Link
          style={{
            position: "absolute",
            right: "20px",
            top: "20px",
          }}
          to="/"
        >
          <CancleBtnCircle>
            <CancleBtnBarLeft />
            <CancleBtnBarRight />
          </CancleBtnCircle>
        </Link> */}
        <LoginForm />
      </LoginWrap>
    </LoginBackground>
  );
};
export default Login;
