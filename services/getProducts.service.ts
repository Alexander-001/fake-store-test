import { ProductResponse } from "../interfaces/product.interface";
import { serviceRequest } from "../utils/request";

export const getProductsService = async () => {
  let data: ProductResponse = {
    products: [],
    messageError: "",
    error: false,
  };
  try {
    const response = await serviceRequest("products", "GET", {});
    data = { products: response || "", messageError: "", error: false };
  } catch (error: any) {
    data = {
      products: [],
      messageError: "Hubo un error en el servidor",
      error: true,
    };
  }

  return { data };
};
