import React from 'react';
import { FlatList, StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';
import { Title } from 'react-native-paper';
import SeasonCard from './Cards/SeasonCard';
import theme from '../../Theme';

const deviceWidth = Dimensions.get("screen").width;
const deviceHeight = Dimensions.get("screen").height;

const SeasonList = ({ season, navigation }) => {
  const emptyFlatlist = (
    <View style={styles.foundContainer}>
      <Title style={styles.title}>Top data not found.</Title>
    </View>
  );

  return (
    <View>
      <FlatList
        style={styles.list}
        data={season.data}
        keyExtractor={(item) => item.mal_id}
        horizontal
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={emptyFlatlist}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.cardContainer} 
            key={item.mal_id}
            onPress={() => {navigation.navigate("AnimeDetails", { item })}}
            >
              <SeasonCard item={item}/>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  foundContainer: {
    flex: 1,
    alignItems: "center"
  },
  title: {
    color: theme.colors.white,
  },
  cardContainer :{
    marginTop: deviceHeight * 0.02,
    marginHorizontal: 12
  }
});

export default SeasonList;
