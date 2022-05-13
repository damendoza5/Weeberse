import React from 'react';
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import theme from '../../Theme';
import SignupForm from '../Forms/SignUpForm';
import Logo from '../Shared/Logo';
import VectorAnime from '../Shared/VectorAnime';
import VectorPurple from '../Shared/VectorPurple';
import { useFonts } from 'expo-font';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const deviceWidth = Dimensions.get("screen").width;
const deviceHeight = Dimensions.get("screen").height;

const SignUp = () => {
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
        >
            <View style={styles.vectorAnime}>
                <VectorAnime width={deviceWidth} height={deviceHeight}/>
                <Logo style={styles.logo}/>
            </View>
            <Text style={styles.title}>Sign Up</Text>
            <View style={styles.formContainer}>
                <SignupForm/>
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
        bottom: deviceHeight * 0.1,
        left: deviceWidth * 0.7,
        color: theme.colors.white,
        fontSize: 22,
        fontWeight: 'bold',
    }
})

export default SignUp;