import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { credentialsContext } from "../components/CredentialsContext";

import SigninScreen from "../screens/SigninScreen";
import HomeScreen from "../screens/HomeScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import NewsDetailsScreen from "../screens/NewsDetailsScreen";
import WebViewScreen from "../screens/WebViewScreen";
import colors from "../config/colors";

const Stack = createNativeStackNavigator();

function RootStack(props) {
  return (
    <credentialsContext.Consumer>
      {({ storedCredentials }) => (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
              headerStyle: {
                backgroundColor: "transparent",
              },
              cardShadowEnabled: false,
              headerTitle: "",
            }} initialRouteName="SigninScreen">

            {storedCredentials ? 
            ( <>
                <Stack.Screen
                options={{ headerShown: false }}
                name="HomeScreen"
                component={BottomTabNavigator}/>

                <Stack.Screen options={{
                  headerTintColor: colors.white,
                  headerTransparent: true,
                  headerShadowVisible: false, 
                }} name='NewsDetailsScreen' component={NewsDetailsScreen} />

                <Stack.Screen name='WebViewScreen' component={WebViewScreen} />
              </>
            ) : 
            ( 
                <Stack.Screen
                options={{ headerShown: false }}
                name="SigninScreen"
                component={SigninScreen} />
            )}

          </Stack.Navigator>
        </NavigationContainer>
        
      )}
    </credentialsContext.Consumer>
  );
}

export default RootStack;
