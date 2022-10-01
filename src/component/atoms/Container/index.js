import { Platform, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { color } from '../../../utils';

const Container = ({ children }) => {
    const theme = useColorScheme();

    const ContainerStyle = {
        backgroundColor: color[theme].appBg,
        flex: 1,
    }
    return (
        <View style={ContainerStyle}>
            {children}
        </View>
    )
}

export default Container

const styles = StyleSheet.create({})