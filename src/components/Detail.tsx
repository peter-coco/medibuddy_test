import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import DetailForm from "./DetailForm";
import { useSelector } from "react-redux";
import { GlobalState, UserAccount } from "../redux/reducer";

const DetailBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background: #eaf2f7;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DetailWrap = styled.div`
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

const Detail = () => {
  const [user] = useSelector<GlobalState, [UserAccount]>((state) => [
    state.userAccount,
  ]);

  const [userLoginState, setLoginState] = useState(false);

  useEffect(() => {
    const userAccount = window.sessionStorage.getItem("userAccount");
    if (userAccount) {
      setLoginState(JSON.parse(userAccount).loginState);
    }
  }, [user.loginState]);

  return userLoginState ? (
    <DetailBackground>
      <DetailWrap>
        <DetailForm />
      </DetailWrap>
    </DetailBackground>
  ) : (
    <></>
  );
};
export default Detail;
