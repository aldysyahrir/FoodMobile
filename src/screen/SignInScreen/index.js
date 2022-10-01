import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Container, Header, SignInForm } from '../../component'

const SignInScreen = () => {
    return (
        <Container>
            <Header title="Sign In" desc="Find your best ever meal" />
            <SignInForm />
        </Container>
    )
}

export default SignInScreen

const styles = StyleSheet.create({})