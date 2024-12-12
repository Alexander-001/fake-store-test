export interface LoginService {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  error: boolean;
  messageError: string;
}

export interface LoginInputs {
  username: string;
  password: string;
}
