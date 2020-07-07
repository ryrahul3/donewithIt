import React from 'react';
import { Image, StyleSheet, View,Dimensions } from 'react-native';
import { Video } from 'expo-av';

import colors from "../config/color";

const { width, height} = Dimensions.get('window');

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <Video
        style={styles.video}
        source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode='contain'
        shouldPlay={true}
        isLooping={false}
        useNativeControls
      />
      {/* <Image resizeMode='contain' style={styles.image} source={require('../assets/chair.jpg')} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
    alignItems:'center'
  },
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: 'absolute',
    top: 40,
    left: 30,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: 'absolute',
    top: 40,
    right: 30,
  },
  image: {
    width: width,
    height: height,
  },
  video: {
    width: width,
    height: height,
  },
});
export default ViewImageScreen;
