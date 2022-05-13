import React from "react";
import { View, Text, StyleSheet} from 'react-native';

const UnseenAnimes = () => {
    return (
        <View style={styles.container}>
            <Text>Unseen Animes Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default UnseenAnimes;