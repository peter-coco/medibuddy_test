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
  const [user, isChangedEmail] = useSelector<
    GlobalState,
    [UserAccount, boolean]
  >((state) => [state.userAccount, state.isChangedEmail]);

  const [userLoginState, setLoginState] = useState(false);

  useEffect(() => {
    if (user.loginState === true) {
      const userAccount = window.sessionStorage.getItem("userAccount");
      if (userAccount) {
        setLoginState(JSON.parse(userAccount).loginState);
      }
    } else {
      setLoginState(false);
    }
  }, [user]);

  return (
    <BackgroundWrap>
      <Route
        path="/login"
        render={() => (!userLoginState ? <Login /> : <Redirect to="/main" />)}
      />
      <Route
        path="/main"
        render={() => (userLoginState ? <Main /> : <Redirect to="/Login" />)}
      />
      <Route
        path="/detail"
        render={() => (!isChangedEmail ? <Detail /> : <Redirect to="/main" />)}
      />
    </BackgroundWrap>
  );
};
export default Background;
