import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Container, Header, SignUpForm } from '../../component'

const SignUpScreen = () => {
  return (
    <Container>
      <Header title="SignUp" desc="Register and eat" />
      <SignUpForm />
    </Container>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({})