import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
  title: {
    fontSize: 20,
    paddingLeft: 30,
    paddingTop: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  tabsContainer: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 10,
    borderBottomWidth: 1,
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
    marginTop: 10,
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "100%",
    height: "auto",
    flexDirection: "row",
  },
});
