import { faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Button } from "native-base";
import React from "react";
import { Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import Loader from "../../components/Loader";
import WarningModal from "../../components/Modal/WarningModal";
import { useLogin } from "../../hooks/useLogin";
import { isLoggedIn } from "../../utils";
import { styles } from "./styles";

const Login: React.FC<any> = ({ navigation }) => {
  const {
    //* Variables
    token,
    showLoader,
    showPassword,
    inputs,
    errors,
    showModal,
    messageModal,

    //* Functions
    onChangeInput,
    onClickLogin,
    onChangeShowPassword,
    openCloseModal,
  } = useLogin(navigation);

  isLoggedIn(token, navigation);

  return (
    <TouchableWithoutFeedback>
      {showLoader ? (
        <Loader />
      ) : (
        <View style={styles.main}>
          {showModal && (
            <WarningModal
              showModal={showModal}
              openCloseModal={openCloseModal}
              messageModal={messageModal}
            />
          )}
          <Text style={styles.title}>Inicia sesión con tu cuenta</Text>
          <View style={styles.form}>
            <Text style={styles.label}>Ingresa tu nombre de usuario</Text>
            <View style={styles.contentInput}>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                placeholder="Nombre de usuario"
                placeholderTextColor={"#fff"}
                keyboardType="default"
                value={inputs.username} // @ts-ignore
                onChangeText={(value) => onChangeInput("username", value)}
              />
              {errors.username && (
                <Text style={styles.errorMessage}>{errors.username}</Text>
              )}
            </View>
          </View>
          <View style={styles.containerEye}>
            <Text style={styles.label}>Ingresa tu contraseña</Text>
            <View style={styles.contentInput}>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                placeholder="Contraseña"
                placeholderTextColor={"#fff"}
                secureTextEntry={!showPassword}
                value={inputs.password} // @ts-ignore
                onChangeText={(value) => onChangeInput("password", value)}
              />
              {errors.password && (
                <Text style={styles.errorMessage}>{errors.password}</Text>
              )}
              <View style={styles.iconEye} onTouchStart={onChangeShowPassword}>
                <FontAwesomeIcon
                  icon={showPassword ? faLockOpen : faLock}
                  size={20}
                  style={{ color: "#fff" }}
                />
              </View>
            </View>
          </View>
          <View style={styles.containerButton}>
            <Button style={styles.button} onPress={onClickLogin}>
              Iniciar sesión
            </Button>
          </View>
        </View>
      )}
    </TouchableWithoutFeedback>
  );
};

export default Login;
