import React, { useEffect } from "react";
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
  const [user, loginState] = useSelector<GlobalState, [UserAccount, boolean]>(
    (state) => [state.userAccount, state.loginState]
  );

  return (
    <BackgroundWrap>
      {/* <Route path="/login" component={Login} /> */}
      <Route
        path="/login"
        render={() => (!loginState ? <Login /> : <Redirect to="/main" />)}
      />
      <Route path="/main" component={Main} />
      {user.email ? (
        <Route path={`/detail?email={${user.email}}`} component={Detail} />
      ) : (
        ""
      )}
    </BackgroundWrap>
  );
};
export default Background;
