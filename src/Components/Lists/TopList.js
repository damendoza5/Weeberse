import React from 'react';
import { FlatList, StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';
import { Title } from 'react-native-paper';
import TopCard from './Cards/TopCard';
import theme from '../../Theme';

const deviceWidth = Dimensions.get("screen").width;
const deviceHeight = Dimensions.get("screen").height;

const TopList = ({ top, navigation }) => {
  const emptyFlatlist = (
    <View style={styles.foundContainer}>
      <Title style={styles.title}>Top data not found.</Title>
    </View>
  );

  return (
    <View>
      <FlatList
        style={styles.list}
        data={top.data}
        keyExtractor={(item) => item.mal_id}
        horizontal
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={emptyFlatlist}
        pagingEnabled
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.cardContainer} 
            key={item.mal_id}
            onPress={() => {navigation.navigate("AnimeDetails", { item })}}
            >
              <TopCard title={item.title} 
                image={item.images.jpg.large_image_url} 
                rank={item.rank}
                score={item.score}
                genres={item.genres}
              />
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
    width: deviceWidth - 8,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default TopList;
