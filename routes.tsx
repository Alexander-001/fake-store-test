import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";
import CloseSessionButton from "./components/CloseSessionButton";
import Login from "./pages/login";
import Products from "./pages/products";
import ProductDetail from "./pages/products/product-detail";
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
            screenOptions={{
              headerTitle: "Inicio de Sesión",
              headerTintColor: "#000",
              contentStyle: { backgroundColor: "rgb(17 24 39)" },
              headerBackVisible: false,
            }}
            initialRouteName="LoginUser"
          >
            <Stack.Screen name="LoginUser" component={Login} />
            <Stack.Screen
              name="Products"
              options={({ navigation }) => ({
                headerTitle: "Productos",
                headerBackButtonMenuEnabled: false,
                headerBackVisible: false,
                headerRight: () => CloseSessionButton(navigation),
              })}
              component={Products}
            />
            <Stack.Screen
              name="ProductDetail"
              options={({ navigation }) => ({
                headerTitle: "Detalle producto",
                headerBackButtonMenuEnabled: true,
                headerBackVisible: true,
                headerRight: () => CloseSessionButton(navigation),
              })}
              component={ProductDetail}
            />
          </Stack.Navigator>
        </NativeBaseProvider>
      </AppContext.Provider>
    </NavigationContainer>
  );
};

export default Routes;
