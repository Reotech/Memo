import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import AppActivityIndicator from './AppActivityIndicator';


function AppButton({title, name, icon, onPress, color= "white", indicator }) {
    
    return (
       <TouchableOpacity style={[styles.button, {backgroundColor: colors[color]}]} onPress={onPress}>
           {icon && <MaterialCommunityIcons style={styles.icon} name={name} size={22} color={colors.primary} />}
           {indicator && <AppActivityIndicator color={colors.primary} size='small' />}
           <Text style={styles.text}>{title}</Text>
       </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        padding: 15,
        backgroundColor: colors.white,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        flexDirection: 'row'
    },

    text: {
        fontSize: 17,
        color: colors.primary,
        fontWeight: 'bold',
    },

    icon: {
        color: colors.primary,
        marginRight: 20,
        fontWeight: 'bold'
    }

})

export default AppButton;