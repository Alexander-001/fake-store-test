import { useContext } from "react";
import AppContext from "../../../utils/AppContext";
import { StateAppContext } from "../../../utils/AppContext/useInitialStateAppContext";

export const useCloseSession = (navigation: {
  navigate: (path: string) => void;
}) => {
  const { setToken }: StateAppContext = useContext<any>(AppContext);
  const onClickCloseSession = () => {
    setToken("");
    navigation.navigate("LoginUser");
  };
  return {
    //* Variables

    //* Functions
    onClickCloseSession,
  };
};
