import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Gradient = ({width, height}) => {
  const styles = StyleSheet.create({
    fixedTop: {
        zIndex: 1,
        top: 0,
        width: width,
        height: height,
    },
    linearGradient: {
      height: height,
      width: width,
      borderRadius: 40
    },
  });

  return (
    <View style={styles.fixedTop}>
        <LinearGradient
            colors={[
            'transparent',
            '#333',
            ]}
            style={styles.linearGradient}
        />
    </View>
  );
}

export default Gradient;