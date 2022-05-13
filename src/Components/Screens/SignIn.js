import React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import theme from '../../Theme';
import SignInForm from '../Forms/SignInForm';
import Logo from '../Shared/Logo';
import VectorAnime from '../Shared/VectorAnime';
import VectorPurple from '../Shared/VectorPurple';
import { useFonts } from 'expo-font';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const deviceWidth = Dimensions.get("screen").width;
const deviceHeight = Dimensions.get("screen").height;

const SignIn = ({navigation}) => {
    const [loaded] = useFonts({
        Poppins: require('../../../assets/Poppins-ExtraLight.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <KeyboardAwareScrollView
        style={styles.container}
        bounces={true}
        showsVerticalScrollIndicator={false}
        >
            <View style={styles.vectorAnime}>
                <VectorAnime width={deviceWidth} height={deviceHeight}/>
                <Logo style={styles.logo}/>
            </View>
            <Text style={styles.title}>Sign In</Text>
            <View style={styles.formContainer}>
                <SignInForm/>
            </View>
            <View style={styles.signUp}>
                <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                    <Text style={styles.signUpText}>Sign up</Text>
                </TouchableOpacity>
            </View>
            <VectorPurple width={deviceWidth} height={deviceHeight}/>
        </KeyboardAwareScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        fontFamily: 'Poppins'
    },
    vectorAnime: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'flex-end'
    },
    logo: {
        width: 130,
        height: 100,
        top: deviceHeight * 0.2,
        right: deviceWidth * 0.05
    },
    title: {
        marginTop: deviceHeight * -0.22,
        marginBottom: deviceHeight * 0.1,
        marginLeft: deviceWidth * 0.7,
        color: theme.colors.white,
        fontSize: 22,
        fontWeight: 'bold',
    },
    formContainer: {
        marginBottom: deviceHeight * 0.01
    },
    signUp: {
        marginTop: deviceHeight * -0.11,
        marginBottom: deviceHeight * 0.1,
        marginLeft: deviceWidth * 0.07,
        marginRight: deviceWidth * 0.3,
        position: "relative",
    },
    signUpText: {
        marginBottom: deviceHeight * -0.3,
        textDecorationLine: "underline",
        color: theme.colors.acento,
        fontSize: 18,
    }
})

export default SignIn;