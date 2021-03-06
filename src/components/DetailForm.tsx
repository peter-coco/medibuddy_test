import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Actions from "../redux/actions";
import { GlobalState, UserAccount } from "../redux/reducer";
import { checkValidEmail } from "../utils/checkValidAccount";

const DetailFormWrap = styled.div`
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
const DetailTitleWrap = styled.div`
  display: flex;
  width: 100%;
  height: 51px;
`;
const DetailTitle = styled.div`
  width: 60%;
  height: 100%;
  text-align: center;
`;
const DetailIdWrap = styled.div`
  display: flex;
  width: 100%;
  height: 51px;
`;
const DetailIdTitle = styled.div`
  width: 40%;
  height: 51px;
  text-align: center;
`;
const DetailIdInput = styled.input`
  width: 60%;
  height: 100%;
  background-color: #c4c4c4;
  font-size: 20px;
  padding: 10px;
  box-sizing: border-box;
  border: 0px;

  &:placeholder {
    font-style: italic;
  }
`;

const DetailEmpty = styled.div`
  width: 40%;
  height: 51px;
`;

const DetailBtnsWrap = styled.div`
  display: flex;
  width: 100%;
  height: 51px;
`;
const DetailBtn = styled.div``;
const DetailBtns = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  height: 100%;

  & div {
    cursor: pointer;
    width: 100%;
    height: 100%;
    background-color: #b2a20c;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    color: #000000;
    font-weight: 600;
  }
`;

const DetailForm = () => {
  const dispatch = useDispatch();

  const [user] = useSelector<GlobalState, [UserAccount]>((state) => [
    state.userAccount,
  ]);
  const [userEmail, setUserEmail] = useState("");
  const setUserEmailFunc = (e: any) => {
    setUserEmail(e.target.value);
  };

  const resetEmailValue = (email: string) => {
    dispatch({
      type: Actions.CHANGE_EMAIL_VALUE,
      payload: { email },
    });

    const userAccount = {
      email: email,
      password: user.password,
      loginState: true,
    };
    window.sessionStorage.setItem("userAccount", JSON.stringify(userAccount));
  };

  const changeUserEmailFunc = (email: string) => {
    const isValidEmail = checkValidEmail(email);
    const emailErrorMsg = "email error : ??????????????? ???????????? ??????";
    if (!isValidEmail) {
      alert(emailErrorMsg);
      return;
    }

    resetEmailValue(email);
  };

  return (
    <DetailFormWrap>
      <DetailTitleWrap>
        <DetailEmpty />
        <DetailTitle>?????? ?????? ??????</DetailTitle>
      </DetailTitleWrap>
      <DetailIdWrap>
        <DetailIdTitle>?????????</DetailIdTitle>
        <DetailIdInput
          placeholder="????????? ????????? ??????"
          onChange={setUserEmailFunc}
        ></DetailIdInput>
      </DetailIdWrap>
      <DetailBtnsWrap>
        <DetailEmpty />
        <DetailBtns>
          <DetailBtn
            onClick={() => {
              changeUserEmailFunc(userEmail);
            }}
          >
            ????????? ??????
          </DetailBtn>
        </DetailBtns>
      </DetailBtnsWrap>
    </DetailFormWrap>
  );
};
export default DetailForm;
