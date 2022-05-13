import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Favorites = () => {
    return (
        <View style={styles.container}>
            <Text>Favorites Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default Favorites;