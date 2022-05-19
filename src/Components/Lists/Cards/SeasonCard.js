import React from "react";
import { StyleSheet, View, Dimensions, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import theme from "../../../Theme";
import SeasonImage from "../Images/SeasonImage";

const deviceWidth = Dimensions.get("screen").width;
const deviceHeight = Dimensions.get("screen").height;

const SeasonCard = ({ item }) => {
    return (
        <View style={styles.container}>
            <SeasonImage image={item.images.jpg.image_url} height={deviceHeight} width={deviceWidth}/>
            <View style={styles.infoContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{item.title}</Text>
                    <View style={styles.scoreContainer}>
                        <Text style={styles.textScore}>Score</Text>
                        <View style={styles.score}>
                            <Text>{item.score}</Text>
                        </View>
                    </View>
                    <Text style={styles.status}>{item.status}</Text>
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
    marginTop: 10,
    color: theme.colors.white,
    fontWeight: "bold",
    fontSize: 16,
  },
  textContainer: {
    flex:3,
    width: deviceWidth * 0.31,
    left: deviceWidth * 0.03
  },
  infoContainer: {
    flexDirection: "column",
  },
  scoreContainer: {
      flexDirection: 'row',
      marginTop: 8
  },
  score: {
      left: 4,
      backgroundColor: theme.colors.acento,
      padding: 3,
      borderRadius: 20,
      paddingHorizontal: 6
  },
  textScore: {
      paddingVertical: 3
  },
  status: {
      marginTop: 8,
      fontSize: 12
  }
});

export default SeasonCard;
