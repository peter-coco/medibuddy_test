import React, { useEffect } from "react";
import styled from "styled-components";

import { Route } from "react-router-dom";

import Login from "./Login";
import Detail from "./Detail";
import Main from "./Main";

const BackgroundWrap = styled.div`
  width: 100vw;
  height: 100vh;
  background: #eaf2f7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background = () => {
  return (
    <BackgroundWrap>
      <Route path="/login" component={Login} />
      <Route path="/main" component={Main} />
      <Route path="/detail?email={}" component={Detail} />
    </BackgroundWrap>
  );
};
export default Background;
