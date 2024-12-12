import { useState } from "react";
import { requestSetToken } from "../request";

interface InitialStateAppContext {
  token: string;
}

export const initialState: InitialStateAppContext = {
  token: "",
};

export const useInitialStateAppContext = () => {
  const [state, setState] = useState<InitialStateAppContext>(initialState);

  const setToken = (token: string) => {
    setState((prevState) => ({ ...prevState, token }));
  };

  requestSetToken(state.token);

  return {
    //* Variables
    token: state.token,

    //* Functions
    setToken,
  };
};

export type StateAppContext = ReturnType<typeof useInitialStateAppContext>;
