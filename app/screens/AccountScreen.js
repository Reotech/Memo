import React, { useContext } from "react";
import { FlatList, View, StyleSheet, Text, Image, Alert } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppSeparator from "../components/AppSeparator";
import ListItem from "../components/ListItem";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { credentialsContext } from "../components/CredentialsContext";
import colors from "../config/colors";
import Icon from "../components/Icon";

function AccountScreen(props) {
  const { storedCredentials, setStoredCredentials } =
    useContext(credentialsContext);
  const { name, email, photoUrl } = storedCredentials;

  const clearLogin = () => {
    AsyncStorage.removeItem("memoCredentials")
      .then(() => {
        setStoredCredentials("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const profilePic = photoUrl
    ? { uri: photoUrl }
    : require("../assets/profile.jpg");

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <View style={styles.imgContainer}>
        <Text style={styles.headerText}>Hi, {name || "Buddy"}</Text>
      </View>

      <View style={styles.container}>
        <Image style={styles.img} source={profilePic} />

        <ListItem
          title="Log Out"
          onPress={() =>
            Alert.alert("Logout", "Are you sure you want to logout?", [
              { text: "No" },
              {
                text: "Logout",
                onPress: () => clearLogin(),
                style: "destructive",
              },
            ])
          }
          IconComponent={<Icon name="logout" backgroundColor={colors.danger} />}
        />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  imgContainer: {
    height: "40%",
    backgroundColor: colors.primary,
    justifyContent: "center",
    paddingLeft: "10%",
    width: "100%",
  },

  img: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginTop: -25,
    marginHorizontal: 25,
    position: "absolute",
  },

  headerText: {
    color: colors.white,
    fontSize: 31,
  },

  container: {
    marginTop: -40,
    padding: 15,
    paddingTop: 30,
    paddingBottom: 10,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: colors.white,
    flex: 1,
  },
});

export default AccountScreen;
