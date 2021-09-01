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
    email: "",
    password: "",
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
    case Actions.SET_USER_ACCOUNT_VALUE:
      return {
        ...state,
        userAccount: action.payload.userAccount,
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
  }
  return state;
}

export default reducer;
