import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

import { Provider } from "react-redux";
import store from "./redux/index";

import { Route } from "react-router-dom";

import Login from "./components/Login";
import Detail from "./components/Detail";
import Main from "./components/Main";
import Background from "./components/Background";

function App() {
  // const [user, loginState] = useSelector<GlobalState, [UserAccount, boolean]>(
  //   (state) => [state.userAccount, state.loginState]
  // );
  return (
    <Provider store={store}>
      <Background />
      {/* <Route path="/login" component={Login} exact /> */}
      {/* <Route path="/main" component={Main} /> */}
      {/* {user.email ? (
        <Route path={`/detail/email={${test}}`} component={Detail} />
      ) : (
        ""
      )} */}
    </Provider>
  );
}

export default App;
