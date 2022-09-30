import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import { SignInScreen, SignUpAddressScreen, SignUpScreen, SplashScreen, } from "../screen"

const Stack = createStackNavigator()

const Router = () => {
    return (
        <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{headerShown: false}}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="SignInScreen" component={SignInScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
            <Stack.Screen name="SignUpAddressScreen" component={SignUpAddressScreen} />
        </Stack.Navigator>
    )
}

export default Router