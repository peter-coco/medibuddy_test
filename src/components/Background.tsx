import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Redirect, Route } from "react-router-dom";

import Login from "./Login";
import Detail from "./Detail";
import Main from "./Main";
import { useSelector } from "react-redux";
import { GlobalState, UserAccount } from "../redux/reducer";

const BackgroundWrap = styled.div`
  width: 100vw;
  height: 100vh;
  background: #eaf2f7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background = () => {
  const [user, loginState, isChangedEmail] = useSelector<
    GlobalState,
    [UserAccount, boolean, boolean]
  >((state) => [state.userAccount, state.loginState, state.isChangedEmail]);

  const [userLoginState, setLoginState] = useState(false);
  const [userAccount, setUserAccount] = useState<string | null>("");

  useEffect(() => {
    setUserAccount(window.localStorage.getItem("userAccount"));
    if (userAccount) {
      setLoginState(JSON.parse(userAccount).loginState);
    }
  }, [loginState]);

  return (
    <BackgroundWrap>
      <Route
        path="/login"
        render={() => (!userLoginState ? <Login /> : <Redirect to="/main" />)}
      />
      <Route
        path="/main"
        render={() => <Main userLoginState={userLoginState} />}
      />
      <Route
        path="/detail"
        render={() => (!isChangedEmail ? <Detail /> : <Redirect to="/main" />)}
      />
    </BackgroundWrap>
  );
};
export default Background;
