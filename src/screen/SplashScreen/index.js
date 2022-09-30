import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILLogo } from '../../assets/ilustrations'
import { Container, Gap } from '../../component/atoms'
import { color } from '../../utils'

const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        const interval = 3000
        setTimeout(() => {
            navigation.navigate("SignInScreen")
        }, interval)
    }, [])


    return (
        <Container>
            <View style={styles.wrapper}>
                <ILLogo />
                <Gap height={30} />
                <Text style={styles.appName}>FoodMarket</Text>
            </View>
        </Container>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.dark.yellow
    },
    appName: {
        fontSize: 32,
        lineHeight: 48,
        fontWeight: "500",
        color: color.dark.black
    }
});