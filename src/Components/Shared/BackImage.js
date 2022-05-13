import React from "react";
import { View, ImageBackground, StyleSheet, Dimensions } from "react-native";
import BackGradient from "./BackGradient";

const deviceHeight = Dimensions.get("screen").height;
const deviceWidth = Dimensions.get("screen").width;
const imageWidth = deviceWidth;
const imageHeight = deviceHeight *  0.7;

const BackImage = ({ image }) => {
  return (
    <View>
      <BackGradient width={imageWidth} height={imageHeight}/>
      <ImageBackground
          style={styles.image}
          source={{
          uri: image,
          }}
          imageStyle={{borderBottomLeftRadius: 41, borderBottomRightRadius: 41}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    marginTop: deviceHeight * -0.7,
    width: deviceWidth,
    height: imageHeight,
  },
});

export default BackImage;