import React, { useContext } from "react";
import { Image, Text, StyleSheet, ScrollView, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import moment from "moment";

import { credentialsContext } from "../components/CredentialsContext";
import colors from "../config/colors";
import TextLink from "../components/TextLink";


function NewsDetailsScreen({ navigation, route }) {
    const {item} = route.params;
    const { storedCredentials, setStoredCredentials } = useContext(credentialsContext);
    const { name, email, photoUrl } = storedCredentials;

    return (
        <SafeAreaProvider style={{ flex:1 }}>
            <View style={styles.imgContainer}>
                <Image style={styles.img} source={{uri: item.image}}  />
            </View>

            <View style={styles.container}>
                <ScrollView style={{ flex: 1 }}>
                    <Text style={styles.title}>{JSON.stringify(item.title)}</Text>
                    <Text style={styles.author}>{item.author}</Text>
                    <View style={styles.subContainer}>
                        <Text style={styles.labelText}>Source:</Text>
                        <Text style={styles.source}>{item.source}</Text>
                    </View>
                    <Text style={styles.time}>{moment(item.published_at).format('d MMM y')}</Text>
                    <Text style={styles.description}>{item.description}</Text>

                    <Text style={styles.labelText}>Read More at:</Text>
                    <TextLink onPress={() => navigation.navigate('WebViewScreen',{item})} style={styles.url} title={item.url} />
                </ScrollView>
            </View>
        </SafeAreaProvider>

    );
}

const styles = StyleSheet.create({
    imgContainer: {
        height: '40%',
    },

    img: {
        height: '100%',
        width: '100%',
    },

    container: {
       marginTop: -40,
       padding: 15,
       paddingTop:30,
       paddingBottom: 0,
       borderTopLeftRadius: 40,
       borderTopRightRadius: 40,
       backgroundColor: colors.white,
       flex: 1,
    },

})

export default NewsDetailsScreen;