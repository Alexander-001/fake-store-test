import { useContext } from "react";
import AppContext from "../utils/AppContext";
import { StateAppContext } from "../utils/AppContext/useInitialStateAppContext";

export const useProducts = (navigation: {
  navigate: (path: string) => void;
}) => {
  const { token, auth }: StateAppContext = useContext<any>(AppContext);

  const onClickDeleteToken = () => {
    auth("");
  };

  return {
    //* Variables
    token,
    //* Functions
    onClickDeleteToken,
  };
};
