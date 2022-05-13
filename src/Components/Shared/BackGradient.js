import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import theme from '../../Theme';

const BackGradient = ({width, height}) => {
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
            theme.colors.background,
            ]}
            style={styles.linearGradient}
        />
    </View>
  );
}

export default BackGradient;