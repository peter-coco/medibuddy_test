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

// const test = "fdfd";

function App() {
  return (
    <Provider store={store}>
      <Route path="/login" component={Login} exact />
      <Route path="/main" component={Main} />
      {/* {test ? (
        <Route path={`/detail/email={${test}}`} component={Detail} />
      ) : (
        ""
      )} */}
    </Provider>
  );
}

export default App;
