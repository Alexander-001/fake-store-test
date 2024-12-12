import React from "react";
import { ActivityIndicator, View } from "react-native";
import { styles } from "./styles";

const Loader: React.FC<{}> = () => {
  return (
    <View style={styles.contentLoader}>
      <ActivityIndicator size="large" color="#09f" />
    </View>
  );
};

export default Loader;
