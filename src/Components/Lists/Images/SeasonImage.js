import React from "react";
import { View, Image } from "react-native";

const SeasonImage = ({ image, width, height }) => {
  return (
    <View>
      <Image
          style={{width: width * 0.35, height: height * 0.25, borderRadius: 20,resizeMode: 'cover'}}
          source={{
          uri: image,
          }}
      />
    </View>
  );
};

export default SeasonImage;