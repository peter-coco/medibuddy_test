import Actions from "./actions";

export interface UserAccount {
  email: string;
  password: string;
}

export interface GlobalState {
  userAccount: UserAccount;
  loginState: boolean;
}

const initialState: GlobalState = {
  userAccount: {
    email: "",
    password: "",
  },
  loginState: false,
};

function reducer(
  state: GlobalState = initialState,
  action: { type: Actions; payload: any }
): GlobalState {
  // return type !!
  switch (action.type) {
    case Actions.SET_USER_ACCOUNT_VALUE:
      return {
        ...state,
        userAccount: action.payload.userAccount,
      };
    case Actions.SET_LOGIN_FAIL_N_PASS:
      return {
        ...state,
        loginState: action.payload.loginState,
      };
    // case Actions.CHANGE_EMAIL_VALUE:
    //   return {
    //     ...state,
    //     userAccount : {
    //       ...UserAccount,
    //       email : action.payload.email},
    //   };
  }
  return state;
}

export default reducer;
