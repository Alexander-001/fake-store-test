import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  main: {
    display: "flex",
    flex: 1,
    margin: 30,
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#f1f1f1",
    justifyContent: "center",
    marginTop: 120,
    marginBottom: 120,
  },
  title: {
    fontSize: 17,
    fontWeight: "800",
    color: "rgb(17 24 39)",
    width: "100%",
    textAlign: "left",
    paddingLeft: 20,
    paddingTop: 10,
  },
  form: {
    marginTop: 20,
    width: "100%",
    display: "flex",
  },
  label: {
    fontSize: 15,
    fontWeight: "400",
    marginTop: 5,
    paddingLeft: 10,
    marginHorizontal: 12,
    color: "rgb(17 24 39)",
  },
  contentInput: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  input: {
    height: 45,
    marginHorizontal: 12,
    marginTop: 10,
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "rgb(55 65 81)",
    borderColor: "rgb(75 85 99)",
    color: "#fff",
    width: "90%",
  },
  containerEye: {
    width: "100%",
    marginTop: 10,
  },
  iconEye: {
    position: "absolute",
    right: "8%",
    top: 20,
    color: "#fff",
  },
  containerButton: {
    marginTop: 30,
    width: "90%",
  },
  button: {
    backgroundColor: "rgb(29 78 216)",
  },
  errorMessage: {
    color: "rgb(127 29 29)",
    width: "90%",
    marginTop: 10,
    paddingLeft: 5,
  },
});
