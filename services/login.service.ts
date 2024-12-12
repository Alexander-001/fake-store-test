import { LoginResponse, LoginService } from "../interfaces/login.interface";
import { serviceRequest } from "../utils/request";

export const loginService = async (bodyParams: LoginService) => {
  let data: LoginResponse = {
    token: "",
    messageError: "",
    error: false,
  };
  try {
    const response = await serviceRequest("auth/login", "POST", bodyParams);
    data = { token: response.token || "", messageError: "", error: false };
  } catch (error: any) {
    data.error = true;
    data.token = "";
    if (error.status === 401) {
      data.messageError = "Usuario o contraseña incorrectos";
      return { data };
    }
    data.messageError = "Hubo un error en el servidor";
  }
  return { data };
};
