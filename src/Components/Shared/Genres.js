import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../../Theme';

const Genres = ({ genres }) => {
  return (
    <View style={styles.genres}>
      {genres.map((genre, index) => {
        return (
          <View key={index} style={styles.genre}>
            <Text style={styles.genreText}>{genre.name}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  genres: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginVertical: 4,
  },
  genre: {
      paddingHorizontal: 6,
      paddingVertical: 2,
      borderWidth: 1,
      borderRadius: 14,
      borderColor: theme.colors.acento,
      marginRight: 4,
      marginBottom: 4,
  },
  genreText: {
      color: theme.colors.white,
      fontSize: 9, 
      opacity: 0.4
  }
});

export default Genres;