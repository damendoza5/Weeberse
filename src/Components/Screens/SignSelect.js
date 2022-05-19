import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Title, Text, Button } from 'react-native-paper';
import Logo from '../Shared/Logo'
import AnimeGradient from '../Shared/AnimeGradient';
import theme from '../../Theme';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 

const deviceWidth = Dimensions.get("screen").width;
const deviceHeight = Dimensions.get("screen").height;

const SignSelect = ({navigation}) => {

    return (
        <View style={styles.container}>
            <StatusBar style='auto'/>
            <AnimeGradient width={deviceWidth} height={deviceHeight}/>
            <View style={styles.logoContainer}>
                <Logo style={styles.logo}/>
                <Title style={styles.weeberse}>Weeberse</Title>
            </View>
            <View style={styles.phraseContainer}>
                <Text style={styles.phrase}>Save your animes, and see latest news!</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button style={styles.button}>
                    <AntDesign name="google" size={16} color={theme.colors.white} style={styles.icon}/>
                    <Text style={styles.buttonText}>Sign Up with Gmail</Text>
                </Button>
                <Button style={styles.button2} onPress={() => navigation.navigate("SignUp")}>
                    <MaterialIcons name="email" size={18} color={theme.colors.white} style={styles.icon}/>
                    <Text style={styles.buttonText}>Sign Up with Email</Text>
                </Button>
            </View>
            <View style={styles.signin}>
                <Text style={styles.account}>already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("SignIn")}><Text style={styles.signinText}>Sign In</Text></TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background
    },
    logoContainer: {
        marginTop: deviceHeight * -0.2,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    logo: {
        width: 170,
        height: 140,
    },
    weeberse: {
        color: theme.colors.white,
        fontSize: 32,
        fontWeight: 'bold',
        top: deviceHeight * 0.15,
        right: deviceWidth * 0.1
    },
    buttonContainer: {
        marginTop: "6%",
        alignItems: 'center'
    },
    button: {
        height: 60,
        width: 300,
        backgroundColor: theme.colors.acento,
        borderRadius: 18,
        justifyContent: 'center'
    },
    button2: {
        height: 60,
        width: 300,
        backgroundColor: theme.colors.acento,
        borderRadius: 18,
        justifyContent: 'center',
        marginTop: "3%"
    },
    buttonText: {
        color: theme.colors.white,
        fontSize: 14,
        fontWeight: 'bold',
    },
    phraseContainer: {
        marginTop: "4%",
        alignItems: 'center'
    },
    phrase: {
        color: theme.colors.white,
        fontSize: 14
    },
    signin: {
        marginTop: "5%",
        flexDirection: 'row',
        justifyContent: 'center'
    },
    account: {
        color: theme.colors.white
    },
    signinText: {
        color: theme.colors.white,
        textDecorationLine: 'underline',
        fontSize: 16,
        marginLeft: 10
    }
})

export default SignSelect;