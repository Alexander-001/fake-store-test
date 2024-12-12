import { Image } from "native-base";
import React from "react";
import { ScrollView, Text, TouchableWithoutFeedback, View } from "react-native";
import { styles } from "./styles";

const ProductDetail: React.FC<any> = ({ navigation, route }) => {
  const product = route?.params || {
    id: 0,
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
  };
  const { title, price, description, image } = product;
  return (
    <TouchableWithoutFeedback>
      <ScrollView>
        <View style={styles.contentProduct}>
          <Image style={styles.image} src={image} alt={title} />
          <Text style={styles.titleProduct}>{title}</Text>
          <Text style={styles.price}>${price}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default ProductDetail;
