import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import theme from '../../Theme';

const Rating = ({score}) => {
    const filledStars = Math.ceil(score / 2);
    const maxStars = Array(5 - filledStars).fill('staro');
    const r = [...Array(filledStars).fill('star'), ...maxStars];

    return (
        <View style={styles.rating}>
            <Text style={styles.ratingNumber}>{score}</Text>
            {r.map((type, index)=> {
                return <AntDesign key={index} name={type} size={15} color={theme.colors.acento}/>
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    ratingNumber: { marginRight: 4, fontSize: 15, color: theme.colors.white},
    rating: {
      flexDirection: 'row',
    },
})

export default Rating;