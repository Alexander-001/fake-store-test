import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    paddingHorizontal: 10,
    marginHorizontal: 2,
    height: "auto",
    width: "45%",
    marginVertical: 5,
  },
  image: {
    height: 200,
    paddingVertical: 10,
    width: "100%",
    objectFit: "cover",
    borderRadius: 10,
  },
  title: {
    color: "#fff",
    fontWeight: "400",
    fontSize: 15,
    marginTop: 10,
    textAlign: "left",
  },
  price: {
    fontWeight: "bold",
    fontSize: 20,
    paddingVertical: 10,
    color: "#fff",
  },
});
