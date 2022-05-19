import React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import theme from '../../Theme';
import SignUpForm from '../Forms/SignUpForm';
import Logo from '../Shared/Logo';
import SignInGradient from '../Shared/SignInGradient';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons'; 
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const deviceWidth = Dimensions.get("screen").width;
const deviceHeight = Dimensions.get("screen").height;

const SignUp = ({navigation}) => {
    const [loaded] = useFonts({
        Poppins: require('../../../assets/Poppins-ExtraLight.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <KeyboardAwareScrollView
        style={styles.container}
        bounces={false}
        >
            <SignInGradient height={deviceHeight} width={deviceWidth}/>
            <View style={styles.close}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="close" size={34} color={theme.colors.white} />
                </TouchableOpacity>
            </View>
            <View style={styles.logoContainer}>
                <Logo style={styles.logo}/>
            </View>
            <View style={styles.cardBack}>
                <Text style={styles.title}>Sign Up</Text>
                <View style={styles.formContainer}>
                    <SignUpForm/>
                </View>
            </View>
        </KeyboardAwareScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontFamily: 'Poppins',
        backgroundColor: theme.colors.background
    },
    cardBack: {
        width: deviceWidth * 0.8,
        height: deviceHeight * 0.75,
        backgroundColor: theme.colors.primary,
        alignSelf: 'center',
        padding: 30,
        borderRadius: 30
    },
    logoContainer: {
        alignSelf: 'center',
        marginTop: deviceHeight * -0.05
    },
    close: {
        alignSelf: 'flex-start',
        marginTop: deviceHeight * -0.85,
        left: deviceWidth * 0.06
    },
    logo: {
        width: 130,
        height: 100,
    },
    title: {
        color: theme.colors.white,
        marginBottom: "10%",
        fontSize: 32,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
})

export default SignUp;