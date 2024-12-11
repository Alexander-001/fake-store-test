import { Image } from "native-base";
import React from "react";
import { Text, View } from "react-native";
import { Product } from "../../interfaces/product.interface";
import { styles } from "./styles";

interface ProductCard {
  product: Product;
}

const ProductCard: React.FC<ProductCard> = ({
  product: { image, title, price },
}) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} src={image} alt="" />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>${price}</Text>
    </View>
  );
};

export default ProductCard;
