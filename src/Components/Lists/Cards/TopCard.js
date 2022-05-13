import React from "react";
import { StyleSheet, View, Dimensions, TouchableOpacity } from "react-native";
import { Text, Title } from "react-native-paper";
import theme from "../../../Theme";
import TopImage from "../Images/TopImage";
import Rating from "../../Shared/Rating";
import { AntDesign } from '@expo/vector-icons'; 
import Genres from "../../Shared/Genres";

const deviceWidth = Dimensions.get("screen").width;
const deviceHeight = Dimensions.get("screen").height;

const TopCard = ({ image, title, rank, score, genres}) => {
    return (
        <View style={styles.container}>
          <TopImage image={image}/>
          <View style={styles.infoContainer}>
            <View style={styles.textContainer}>
              <Title style={styles.rank}>{rank}</Title>
              <Text style={styles.name}>{title}</Text>
              <Rating score={score}/>
              <Genres genres={genres}/>
            </View>
            <View style={styles.right}>
              <AntDesign name="right" size={44} color={theme.colors.acento} />
            </View>
          </View>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden'
  },
  name: {
    color: theme.colors.white,
    fontWeight: "bold",
    fontSize: 16,
  },
  rank: {
    color: theme.colors.acento,
    fontWeight: "bold",
    fontSize: 26,
  },
  textContainer: {
    flex:3,
    width: deviceWidth * 0.71,
    marginTop: deviceHeight * -0.09,
    bottom: deviceHeight * 0.07,
    left: deviceWidth * 0.03
  },
  infoContainer: {
    flexDirection: "row",
  },
  right: {
    width: deviceWidth * 0.02,
    marginTop: deviceHeight * -0.13,
    left: deviceWidth * 0.09,
    flex:1
  }
});

export default TopCard;
