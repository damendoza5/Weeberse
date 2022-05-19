import React from 'react';
import { Image } from 'react-native';

const SignInGradient = ({width, height}) => {
    return (
        <Image
            style={{width: width * 1, height: height * 0.9, resizeMode: 'contain'}}
            source={require("../../../assets/SignInGradient.png")}
        />
    )
}

export default SignInGradient;