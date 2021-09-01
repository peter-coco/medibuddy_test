import Actions from "./actions";

export interface UserAccount {
  email: string;
  password: string;
  loginState: boolean;
}

export interface GlobalState {
  userAccount: UserAccount;
  isChangedEmail: boolean;
}

const initialState: GlobalState = {
  userAccount: {
    email: "medibuddy@medibuddy.com",
    password: "medibuddy^^",
    loginState: false,
  },
  isChangedEmail: false,
};

function reducer(
  state: GlobalState = initialState,
  action: { type: Actions; payload: any }
): GlobalState {
  // return type !!
  switch (action.type) {
    case Actions.SET_LOGIN_PASS:
      return {
        ...state,
        userAccount: {
          ...state.userAccount,
          loginState: true,
        },
      };
    case Actions.CHANGE_EMAIL_VALUE:
      return {
        ...state,
        userAccount: {
          ...state.userAccount,
          email: action.payload.email,
        },
        isChangedEmail: true,
      };

    case Actions.SET_EMAILCHANGE_VALUE_FALSE:
      return {
        ...state,
        isChangedEmail: false,
      };
    case Actions.SET_LOGOUT:
      return {
        userAccount: {
          email: "medibuddy@medibuddy.com",
          password: "medibuddy^^",
          loginState: false,
        },
        isChangedEmail: false,
      };
  }
  return state;
}

export default reducer;
