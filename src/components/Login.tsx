import React, { useEffect } from "react";
import styled from "styled-components";

import LoginForm from "./LoginForm";

const LoginBackground = styled.div`
  width: 100%;
  height: 100%;
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

const Login = () => {
  return (
    <LoginBackground>
      <LoginWrap>
        <LoginForm />
      </LoginWrap>
    </LoginBackground>
  );
};
export default Login;
