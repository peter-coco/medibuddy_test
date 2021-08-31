import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GlobalState, UserAccount } from "../redux/reducer";

const MainFormWrap = styled.div`
  width: 530px;
  height: 220px;
  display: flex;
  flex-direction: column;
  position: relative;
  top: -20px;
  left: -60px;
  gap: 20px;
  justify-content: center;
  & div {
    font-size: 30px;
    color: #fff;
  }
`;
const MainTitleWrap = styled.div`
  display: flex;
  width: 100%;
  height: 51px;
`;
const MainTitle = styled.div`
  width: 60%;
  height: 100%;
  text-align: center;
`;
const MainIdWrap = styled.div`
  display: flex;
  width: 100%;
  height: 51px;
`;
const MainIdTitle = styled.div`
  width: 40%;
  height: 51px;
  line-height: 51px;
  text-align: center;
`;
const MainIdValue = styled.div`
  width: 60%;
  height: 51px;
  background-color: #c4c4c4;
  text-align: center;
  line-height: 51px;
`;

const MainEmpty = styled.div`
  width: 40%;
  height: 51px;
`;

const MainForm = () => {
  const [user, loginState] = useSelector<GlobalState, [UserAccount, boolean]>(
    (state) => [state.userAccount, state.loginState]
  );

  return (
    <MainFormWrap>
      <MainTitleWrap>
        <MainEmpty />
        <MainTitle>Account</MainTitle>
      </MainTitleWrap>
      <MainIdWrap>
        <MainIdTitle>이메일</MainIdTitle>
        <MainIdValue>
          <Link to={{ pathname: "/detail", search: `?email={${user.email}}` }}>
            {user.email}
          </Link>
        </MainIdValue>
      </MainIdWrap>
    </MainFormWrap>
  );
};
export default MainForm;
