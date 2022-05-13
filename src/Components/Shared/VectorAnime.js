import React from 'react';
import { Image } from 'react-native';

const VectorAnime = ({width, height}) => {
    return (
        <Image
            style={{width: width * 1.6, height: height * 1, left: width * 0.32, marginTop: height * -0.45, resizeMode: 'contain' }}
            source={require("../../../assets/anime-vector.png")}
        />
    )
}

export default VectorAnime;