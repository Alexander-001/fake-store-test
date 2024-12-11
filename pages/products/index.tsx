import { Button } from "native-base";
import React from "react";
import { Text } from "react-native";
import { useProducts } from "../../hooks/useProducts";
import { NavigationI } from "../../interfaces/login.interface";
import { isLoggedIn } from "../../utils";

const Products: React.FC<NavigationI> = ({ navigation }) => {
  const { token, onClickDeleteToken } = useProducts(navigation);

  isLoggedIn(token, navigation);
  return (
    <>
      <Text>Products</Text>
      <Button onPress={onClickDeleteToken}>Eliminar token</Button>
    </>
  );
};

export default Products;
