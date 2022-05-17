import React, { useContext } from 'react';
import { FlatList, View, StyleSheet, Text, Image, Alert } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppSeparator from '../components/AppSeparator';
import ListItem from '../components/ListItem';

import { credentialsContext } from "../components/CredentialsContext";
import colors from '../config/colors';



function SettingsScreen(props) {
    const { storedCredentials, setStoredCredentials } = useContext(credentialsContext);
    const { name, email, photoUrl } = storedCredentials;

    const AccountList = [
        { title: "Theme" },
        { title: "Terms and Privacy" },
        { title: "About" },
        { title: "Version Info" },
        { title: "test" },
    ];
    
    return (
        <SafeAreaProvider style={{ flex:1 }}>
        <View style={styles.imgContainer}>
            <Text style={styles.headerText}>Settings</Text>
        </View>

        <View style={styles.container}>
            <FlatList 
            data={AccountList}
            keyExtractor={AccountList => AccountList.title}
            ItemSeparatorComponent={AppSeparator}
            renderItem={({ item }) => <ListItem 
            title={ item.title } /> }
            />
           
            
        </View>        
      
    </SafeAreaProvider>

    );
}

const styles = StyleSheet.create({
    imgContainer: {
        height: '30%',
        backgroundColor: colors.primary,
        justifyContent: 'center',
        paddingLeft: '10%',
        width: '100%'
    },


    headerText: {
        color: colors.white,
        fontSize: 30
    },

    container: {
        marginTop: -40,
        padding: 15,
        paddingTop:30,
        paddingBottom: 10,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: colors.white,
        flex: 1,
    },
})

export default SettingsScreen;
