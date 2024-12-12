import { Image } from "native-base";
import React from "react";
import { Text, View } from "react-native";
import { Product } from "../../interfaces/product.interface";
import { styles } from "./styles";

interface ProductCard {
  product: Product;
  onClickProduct: (product: Product) => void;
}

const ProductCard: React.FC<ProductCard> = ({ product, onClickProduct }) => {
  const { image, title, price } = product;
  return (
    <View
      onStartShouldSetResponder={() => true}
      onResponderRelease={() => onClickProduct(product)}
      style={styles.card}
    >
      <Image style={styles.image} src={image} alt="" />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  );
};

export default ProductCard;
