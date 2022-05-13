import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import Gradient from "../../Shared/Gradient";

const deviceHeight = Dimensions.get("screen").height;
const deviceWidth = Dimensions.get("screen").width;
const imageWidth = deviceWidth * 0.85;
const imageHeight = deviceHeight *  0.255;

const TopImage = ({ image }) => {
  return (
    <View>
      <Gradient width={imageWidth} height={imageHeight}/>
      <Image
          style={styles.image}
          source={{
          uri: image,
          }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    marginTop: deviceHeight * -0.255,
    width: deviceWidth * 0.85,
    height: deviceHeight * 0.255,
    position: "relative",
    borderRadius: 40,
    resizeMode: 'cover',
  },
});

export default TopImage;