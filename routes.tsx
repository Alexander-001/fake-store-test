import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";
import CreateUser from "./pages/create-user";
import Login from "./pages/login";
import Products from "./pages/products";
import AppContext from "./utils/AppContext";
import { useInitialStateAppContext } from "./utils/AppContext/useInitialStateAppContext";

const Routes = () => {
  const Stack = createNativeStackNavigator();
  const initialState = useInitialStateAppContext();

  return (
    <NavigationContainer
      theme={{
        dark: false,
        colors: {
          primary: "",
          background: "",
          card: "",
          text: "",
          border: "",
          notification: "",
        },
        fonts: {
          regular: { fontWeight: "100", fontFamily: "" },
          medium: { fontWeight: "100", fontFamily: "" },
          bold: { fontWeight: "100", fontFamily: "" },
          heavy: { fontWeight: "100", fontFamily: "" },
        },
      }}
    >
      <AppContext.Provider value={initialState}>
        <NativeBaseProvider>
          <Stack.Navigator
            initialRouteName="LoginUser"
            screenOptions={{
              headerTitle: "Inicio de Sesión",
              headerTintColor: "#000",
              contentStyle: { backgroundColor: "#f1f1f1" },
              headerBackVisible: false,
            }}
          >
            <Stack.Screen name="LoginUser" component={Login} />
            <Stack.Screen
              name="Products"
              options={{
                headerTitle: "Productos",
                headerBackButtonMenuEnabled: false,
                headerBackVisible: false,
              }}
              component={Products}
            />
            <Stack.Screen
              name="CreateUser"
              options={{
                headerTitle: "Crear Usuario",
                headerBackButtonMenuEnabled: false,
                headerBackVisible: false,
              }}
              component={CreateUser}
            />
          </Stack.Navigator>
        </NativeBaseProvider>
      </AppContext.Provider>
    </NavigationContainer>
  );
};

export default Routes;
