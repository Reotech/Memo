import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import AsyncStorage from "@react-native-async-storage/async-storage";

import RootStack from "./app/navigators/RootStack";
import BottomTabNavigator from "./app/navigators/BottomTabNavigator";
import { credentialsContext } from "./app/components/CredentialsContext";

export default function App() {
  const [appReady, setAppReady] = useState(false);
  const [storedCredentials, setStoredCredentials] = useState("");

  const checkLoginCredentials = () => {
    AsyncStorage.getItem("memoCredentials")
      .then((result) => {
        if (result != null) {
          setStoredCredentials(JSON.parse(result));
        } else {
          setStoredCredentials(null);
        }
      })
      .catch((error) => console.log(error));
  };

  if (!appReady) {
    return (
      <AppLoading
        startAsync={checkLoginCredentials}
        onFinish={() => setAppReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <>
    <credentialsContext.Provider value={{storedCredentials, setStoredCredentials}}>
      <RootStack />
      {/* <BottomTabNavigator /> */}
    </credentialsContext.Provider>
   </>
  );
}
