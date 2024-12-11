import { useEffect } from "react";

export const isLoggedIn = (
  token: string,
  navigation: { navigate: (path: string) => void }
) => {
  useEffect(() => {
    if (token !== "") navigation.navigate("Products");
    else navigation.navigate("LoginUser");
  }, [token]);
};
