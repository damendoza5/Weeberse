import React from 'react';
import { Image } from 'react-native';

const AnimeGradient = ({width, height}) => {
    return (
        <Image
            style={{width: width * 1, height: height * 0.65, resizeMode: 'contain'}}
            source={require("../../../assets/anime-gradient.png")}
        />
    )
}

export default AnimeGradient;