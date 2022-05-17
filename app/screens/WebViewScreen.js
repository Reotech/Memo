import React, { useContext } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { WebView } from 'react-native-webview';

import { credentialsContext } from "../components/CredentialsContext";

function WebViewScreen({ route }) {
    const {item} = route.params;
    const { storedCredentials, setStoredCredentials } = useContext(credentialsContext);
    const { name, email, photoUrl } = storedCredentials;

    return (
        <SafeAreaProvider>
            <WebView 
            source={{ uri:  item.url}}
            />
       </SafeAreaProvider>
    );
}

export default WebViewScreen;