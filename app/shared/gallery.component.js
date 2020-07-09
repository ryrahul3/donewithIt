import React from 'react';
import { View, Image, ScrollView, TouchableWithoutFeedback } from 'react-native';

import styles from '../config/styles';

export default ({ captures = [], navigation }) => (
  <ScrollView horizontal={true} style={[styles.bottomToolbar, styles.galleryContainer]}>
    {captures.map(({ uri }) => (
      <View style={styles.galleryImageContainer} key={uri}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Video Player', { uri: uri })}>
          <Image source={{ uri }} style={styles.galleryImage} />
        </TouchableWithoutFeedback>
      </View>
    ))}
  </ScrollView>
);
