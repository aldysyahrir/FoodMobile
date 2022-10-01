import { Image, Platform, StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native'
import React from 'react'
import ShowIf from '../ShowIf'
import { ICArrowLeft } from '../../../assets/icons'
import { color } from '../../../utils'

const Header = ({ leftIcon, title, desc, withAvatar, onLeftIconPress }) => {
    const theme = useColorScheme()

    const titleStyle = {
        color: color[theme].primaryText
    }

    const descStyle = {
        color: color[theme].secondaryText
    }

    const containerStyle = {
        backgroundColor: color[theme].defBg,
        paddingTop: Platform.OS === "ios" ? 52 : 36

    }

    return (
        <View style={[styles.container, containerStyle]}>
            <ShowIf show={leftIcon}>
                <TouchableOpacity style={styles.IcLeft}>
                    <ICArrowLeft />
                </TouchableOpacity>
            </ShowIf>

            <View style={styles.body}>
                <Text style={[styles.title, titleStyle]}>{title}</Text>
                <Text style={[styles.desc, descStyle]}>{desc}</Text>
            </View>

            <ShowIf show={withAvatar}>
                <View>
                    <Image />
                </View>
            </ShowIf>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        padding: 24,
        paddingTop: 36,
        flexDirection: 'row',
        alignItems: 'center',
        height: Platform.OS === "ios" ? 144 : 112,
    },
    IcLeft: {
        marginRight: 24,
    },
    body: {
        flex: 1,
        justifyContent: "space-between"
    },
    title: {
        fontSize: 24,
        fontWeight: "500"
    },
    desc: {
        fontSize: 12,
        fontWeight: "300"
    }
})