import Swipeable from 'react-native-gesture-handler/Swipeable';
import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import colors from '../config/colors';
import AppText from './AppText';


function ListItem({title, subTitle, image, IconComponent, onPress, renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>

            <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
                <View style={styles.container}>
                    {IconComponent}

                    {image && <Image style={styles.image} source={image} />}

                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title} numberOfLines={1} >{title}</AppText>
                        {subTitle && <AppText style={styles.subTitle} numberOfLines={2} >{subTitle}</AppText>}
                    </View>

                    <MaterialCommunityIcons color={colors.mediumGray} name="chevron-right" size={23} />
                </View>
            </TouchableHighlight>

        </Swipeable>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding:15,
        backgroundColor: colors.white,
        alignItems: 'center'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: 'center',
        flex: 1
    },

    title: {
        fontWeight: '800'
    },
    subTitle: {
        color: colors.mediumGray,
    }


})

export default ListItem;