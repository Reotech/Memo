import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Image, TouchableOpacity, Text } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import Animated, { Easing } from 'react-native-reanimated';
import colors from '../config/colors';
import AppSeparator from './AppSeparator';

function AppHeader(props) {
    const [ status, setStatus ] = useState('General');

    const setStatusFilter = status => {
        setStatus(status)
    }

    const listTab = [
        { tabName: 'General' },
        { tabName: 'Sports' },
        { tabName: 'Technology' },
        { tabName: 'Entertainment' },
        { tabName: 'Business' },
        { tabName: 'Science' },
        { tabName: 'Health' },
    ];


    return (
       <View style={styles.safeView}>
           <Animated.View style={styles.header}>
                <Image source={require('../assets/theLogo.png')} style={styles.logo} />
                <FontAwesome name='search' size={19} color={colors.mediumGray} />
           </Animated.View>

            <AppSeparator />
          <View>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.scrolly}>    
                {
                    listTab.map((item, index) => (
                        <TouchableOpacity key={index} style={[styles.button, status === item.tabName && styles.tabActive]} onPress={() => setStatusFilter(item.tabName)}>
                            <Text style={[ styles.text, status === item.tabName && styles.textActive ]}>{item.tabName}</Text>
                        </TouchableOpacity>
                    ))
                }                
            </ScrollView>
          </View>
       </View>
    );
}

const styles = StyleSheet.create({
    safeView: {
        width: '100%',
        height: '18%',
        backgroundColor: colors.white,
        paddingTop: 5,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
    },

    logo: {
        height:35,
        width: 132
    },
    
    scrolly: {
        marginLeft: '5%',
    },

    
    button: {
        backgroundColor: colors.midGray,
        borderRadius: 25,
        padding:10,
        marginRight:10
    },

    text: {
        color: colors.dark
    },

    tabActive: {
        backgroundColor: colors.primary,
    },
    
    textActive: {
        color: colors.white
    }




})

export default AppHeader;