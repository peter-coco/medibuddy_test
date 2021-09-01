import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Actions from "../redux/actions";
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
  font-size: 30px;
  color: #fff;
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
  font-size: 30px;
  color: #fff;
`;
const MainIdValue = styled.div`
  width: 60%;
  height: 51px;
  background-color: #c4c4c4;
  text-align: center;
  line-height: 51px;
  font-size: 20px;
  color: #fff;
`;

const MainEmpty = styled.div`
  width: 40%;
  height: 51px;
`;

const MainForm = () => {
  const dispatch = useDispatch();

  const [user] = useSelector<GlobalState, [UserAccount]>((state) => [
    state.userAccount,
  ]);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    dispatch({
      type: Actions.SET_EMAILCHANGE_VALUE_FALSE,
    });

    const userAccount = window.sessionStorage.getItem("userAccount");
    if (userAccount) {
      setUserEmail(JSON.parse(userAccount).email);
    }
  }, [user]);

  return (
    <MainFormWrap>
      <MainTitleWrap>
        <MainEmpty />
        <MainTitle>Account</MainTitle>
      </MainTitleWrap>
      <MainIdWrap>
        <MainIdTitle>이메일</MainIdTitle>
        <MainIdValue>
          <Link to={{ pathname: "/detail", search: `?email={${userEmail}}` }}>
            {userEmail}
          </Link>
        </MainIdValue>
      </MainIdWrap>
    </MainFormWrap>
  );
};
export default MainForm;
