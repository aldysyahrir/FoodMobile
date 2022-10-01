import { ScrollView, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Button, Gap, Input } from '../../atoms'
import { color } from "../../../utils"
import { useNavigation } from "@react-navigation/native"

const SignInForm = () => {
    const theme = useColorScheme();
    const navigation = useNavigation();
    const containerStyle = {
        backgroundColor: color[theme].defBg,
    };
    return (
        <View style={[styles.container, containerStyle]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Input label="Email Address" />
                <Gap height={16} />
                <Input label="Password" secureTextEntry />
                <Gap height={24} />
                <Button label="Sign In" />
                <Gap height={12} />
                <Button label="Google" varian="secondary" />
                <Gap height={12} />
                <Button onPress={() => navigation.navigate('SignUpScreen')}
                    label="Create new account" varian="secondary" />
            </ScrollView>
        </View>
    )
}

export default SignInForm

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 24,
        padding: 24
    }
})