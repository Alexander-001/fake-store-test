import { useContext, useState } from "react";
import { LoginInputs } from "../interfaces/login.interface";
import { loginService } from "../services/login.service";
import AppContext from "../utils/AppContext";
import { StateAppContext } from "../utils/AppContext/useInitialStateAppContext";

export const useLogin = (navigation: { navigate: (path: string) => void }) => {
  const { auth, token }: StateAppContext = useContext<any>(AppContext);
  const [showLoader, setShowLoader] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [messageModal, setMessageModal] = useState<string>("");
  const [inputs, setInputs] = useState<LoginInputs>({
    username: "mor_2314",
    password: "83r5^_",
  });
  const [errors, setErrors] = useState<LoginInputs>({
    username: "",
    password: "",
  });

  const onChangeInput = (name: string, value: string) => {
    console.log(value);
    setErrors((prevState) => ({
      ...prevState,
      [name]: "",
    }));
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validation = () => {
    let username: string = "";
    let password: string = "";
    if (inputs.username === "") {
      username = "Se debe ingresar nombre de usuario.";
    } else username = "";
    if (inputs.password === "") {
      password = "Se debe ingresar contraseña.";
    } else password = "";
    setErrors((prevState) => ({
      ...prevState,
      username,
      password,
    }));
    if (inputs.username !== "" && inputs.password !== "") {
      return true;
    } else return false;
  };

  const onClickLogin = async () => {
    if (validation()) {
      setShowLoader(true);
      const inputParam = {
        username: inputs.username,
        password: inputs.password,
      };
      const { data } = await loginService(inputParam);
      if (data.messageError !== "" && data.error) {
        setShowModal(true);
        setMessageModal(data.messageError);
        setShowLoader(false);
        return;
      }
      if (data.token !== "") {
        auth(data.token);
        navigation.navigate("Products");
        setShowLoader(false);
      }
    }
  };

  const onChangeShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const openCloseModal = () => {
    setShowModal(!showModal);
  };

  return {
    //* Variables
    token,
    showLoader,
    showPassword,
    inputs,
    errors,
    showModal,
    messageModal,

    //* Functions
    onChangeInput,
    onClickLogin,
    onChangeShowPassword,
    openCloseModal,
  };
};
