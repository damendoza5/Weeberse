import React from 'react';
import { Image } from 'react-native';

const Logo = ({style}) => {
    return (
        <Image
        style={style}
            source={require("../../../assets/weeberse-logo.png")}
        />
    )
}

export default Logo;