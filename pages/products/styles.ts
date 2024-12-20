import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  //* Products
  list: {
    width: "100%",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgb(17 24 39)",
  },
  main: {
    marginTop: 20,
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  tabsContainer: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  tab: {
    marginRight: 15,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 50,
    backgroundColor: "#fff",
  },
  activeTab: {
    backgroundColor: "#007BFF",
    color: "#fff",
  },
  tabText: {
    fontSize: 14,
    color: "#333",
  },
  activeTabText: {
    color: "#fff",
    fontWeight: "bold",
  },
  contentProducts: {
    paddingTop: 10,
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "100%",
    height: "auto",
    flexDirection: "row",
  },
  //* Product details
  contentProduct: {
    backgroundColor: "rgb(17 24 39)",
    height: "100%",
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
  },
  image: {
    height: 400,
    paddingVertical: 10,
    width: "90%",
    objectFit: "cover",
    borderRadius: 10,
  },
  titleProduct: {
    color: "#007BFF",
    fontSize: 20,
    paddingTop: 10,
    fontWeight: "600",
    textAlign: "left",
    paddingHorizontal: 15,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
  },
  price: {
    fontSize: 25,
    color: "#fff",
    fontWeight: "bold",
    paddingHorizontal: 15,
    paddingTop: 5,
    textAlign: "left",
    width: "100%",
  },
  description: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "300",
    paddingHorizontal: 15,
    paddingTop: 5,
    textAlign: "left",
    width: "100%",
  },
  contentButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 50,
    width: "100%",
  },
  button: {
    width: "60%",
    borderRadius: 10,
    backgroundColor: "#007BFF",
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});
