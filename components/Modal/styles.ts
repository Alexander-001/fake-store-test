import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  btnClose: {
    position: "absolute",
    right: 20,
    top: 20,
    backgroundColor: "#fff",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    height: 400,
    display: "flex",
    alignItems: "center",
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  iconExclamation: {
    marginBottom: 20,
    marginTop: 40,
    color: "rgb(17 24 39)",
  },
  contentInfo: {
    marginTop: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modalText: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "300",
  },
  button: {
    width: 250,
    backgroundColor: "rgb(29 78 216)",
    color: "#fff",
    height: 50,
    borderRadius: 9999,
    borderWidth: 0,
    marginTop: 20,
  },
  okButton: {
    width: 250,
    backgroundColor: "rgb(153 27 27)",
    color: "#fff",
    height: 50,
    borderRadius: 9999,
    borderWidth: 0,
    marginTop: 20,
  },
  textButton: {
    color: "#fff",
    textAlign: "center",
    fontSize: 17,
  },
});
