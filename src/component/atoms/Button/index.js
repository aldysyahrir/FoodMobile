import { StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native'
import React from 'react'
import { color } from '../../../utils'

const Button = ({ label, varian, onPress }) => {

    const theme = useColorScheme()

    const containerStyle = {
        backgroundColor: varian === "secondary" ?
            color.dark.secondaryText : varian === "danger" ?
                color.dark.red : color.dark.yellow,
    };

    const labelStyle = {
        color: varian === "secondary" ?
            color[theme].defBg : varian === "danger" ?
                color.dark.white : color.dark.black
    }

    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, containerStyle]}>
            <Text style={[styles.label, labelStyle]}>{label}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        paddingVertical: 12,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    label: {
        fontSize: 14,
        fontWeight: "500",
        lineHeight: 21,
    }
})