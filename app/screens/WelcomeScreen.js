import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Button,TouchableWithoutFeedback } from 'react-native';
import colors from '../config/color';


function WelcomeScreen({navigation}) {
  return (
    <ImageBackground style={styles.background} source={require('../assets/background.jpg')}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text>Sell What you don't need</Text>
      </View>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Video Player')}>
        <View style={styles.loginButton}>
          <Text style={styles.loginText}>Video Player</Text>
          {/* <Button title='Press me' color={colors.primary} onPress={() => navigation.navigate('Image')}></Button> */}
        </View>
      </TouchableWithoutFeedback>
      {/* <View style={styles.registerButton}></View> */}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  loginButton: {
    width: '100%',
    height: 70,
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: colors.secondary,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  loginText: {
    color: '#fff',
    top:20,
    alignSelf: 'center',
  },
});

export default WelcomeScreen;
