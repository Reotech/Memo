import React, { useState, useContext } from "react";
import { Image, View, StyleSheet } from "react-native";
import * as Google from "expo-google-app-auth";
import * as Facebook from "expo-facebook";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { credentialsContext } from "../components/CredentialsContext";
import AppButton from "../components/AppButton";
import AppActivityIndicator from "../components/AppActivityIndicator";

function SigninScreen() {
  const [googleSubmitting, setGoogleSubmitting] = useState(false);
  const [facebookSubmitting, setFacebookSubmitting] = useState(false);

  const { storedCredentials, setStoredCredentials } = useContext(credentialsContext);

  const handleGoogleSignin = () => {
    setGoogleSubmitting(true);
    const config = {
      androidClientId:
        "39584151524-hgoqljatervbubj93nb1mn4pk40j0ddg.apps.googleusercontent.com",
      scopes: ["profile", "email"],
    };

    Google.logInAsync(config)
      .then((result) => {
        const { type, user } = result;

        if (type == "success") {
          const { email, name, photoUrl } = user;
          persistLogin({ email, name, photoUrl }, "success");
        } else {
          console.log(error);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleFacebookLogin = async () => {
    setFacebookSubmitting(true);
    try {
      await Facebook.initializeAsync({
        appId: "354074989691376",
      });
      const { type, token } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile"],
      });
      if (type == "success") {
        // Get the user's details using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,picture.height(500)`
        );
        persistLogin({ response }, "success");
        
      } else {
        console.log("An error occurred");
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  };


  const persistLogin = (credentials) => {
    AsyncStorage.setItem("memoCredentials", JSON.stringify(credentials))
      .then(() => {
        setStoredCredentials(credentials);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require("../assets/logo.png")} />

      <View style={styles.buttonContainer}>
          {googleSubmitting ? <AppButton indicator={AppActivityIndicator} /> : 
          ( <AppButton icon="google" name="google" title="Sign in With Google" onPress={handleGoogleSignin} /> )}

          {facebookSubmitting ? <AppButton indicator={AppActivityIndicator} /> : 
          ( <AppButton icon="facebook" name="facebook" title="Sign in With Facebook" onPress={handleFacebookLogin} /> )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4c86f1",
    justifyContent: "center",
    alignItems: "center",
  },

  img: {
    top: 50,
    width: 250,
    height: 260,
    position: "absolute",
    alignItems: "center",
  },

  buttonContainer: {
    width: "85%",
    alignItems: "center",
  },
});

export default SigninScreen;
