import React from 'react';
import { Image} from 'react-native';

const VectorPurple = ({width, height}) => {
    return (
        <Image
            style={{width: width * 1.6, height: height * 0.81, right: width * 0.3, marginBottom: height * -1, marginTop: height * -0.03, resizeMode: 'contain' }}
            source={require("../../../assets/vector-2.png")}
        />
    )
}

export default VectorPurple;