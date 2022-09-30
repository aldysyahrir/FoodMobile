import { StyleSheet, Text, TextInput, useColorScheme, View } from 'react-native'
import React from 'react'
import Gap from '../Gap'
import { color } from '../../../utils'

const Input = () => {
    const theme = useColorScheme()

    const labelStyle = {
        color: color[theme].primaryText
    }

    const inputStyle = {
        borderColor: color[theme].borderColor,
        color: color[theme].secondaryText,
    }

    return (
        <View style={styles.container}>
            <Text style={[styles.label, labelStyle]}>Email Address</Text>
            <Gap height={6} />
            <TextInput style={[inputStyle, styles.input]} />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    label: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: "400"
    },
    input: {
        padding: 12,
        borderRadius: 8,
        fontSize: 18,
        fontWeight: '700',
        borderWidth: 1
    }
})