import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ShowIf = ({ show, children }) => {
    if (show) return children
    return (
        <View />
    )
}

export default ShowIf

const styles = StyleSheet.create({})