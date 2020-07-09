import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableWithoutFeedback, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Camera } from 'expo-camera';
import { Audio } from 'expo-av';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Ionicons } from '@expo/vector-icons';

import styles from '../config/styles';
import Gallery from '../shared/gallery.component';

function CameraScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [recording, setRecording] = useState(false);
  const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.off);
  const [captures, setCapture] = useState([]);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
     // console.log(Camera.getSupportedRatiosAsync());
      if (status == 'granted') {
        let audioResponse = await Audio.requestPermissionsAsync();
        if (audioResponse.status == 'granted') {
          setHasPermission(status === 'granted');
        }
      }
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Camera
          type={cameraType}
          flashMode={flashMode}
          style={styles.preview}
          useCamera2Api
          ratio='4:3'
          ref={(ref) => {
            setCameraRef(ref);
          }}
        />
      </View>

      {captures.length > 0 && <Gallery captures={captures} navigation={navigation} />}

      <Grid style={styles.bottomToolbar}>
        <Row>
          <Col style={styles.alignCenter}>
            <TouchableOpacity
              onPress={() =>
                setFlashMode(flashMode === Camera.Constants.FlashMode.on ? Camera.Constants.FlashMode.off : Camera.Constants.FlashMode.on)
              }
            >
              <Ionicons name={flashMode == Camera.Constants.FlashMode.on ? 'md-flash' : 'md-flash-off'} color='white' size={30} />
            </TouchableOpacity>
          </Col>
          <Col size={2} style={styles.alignCenter}>
            <TouchableWithoutFeedback
              onPressIn={() => {
                
                setRecording(true);
              }}
              onPressOut={() => {
                if (recording) cameraRef.stopRecording();
              }}
              onLongPress={async () => {
                const videoData = await cameraRef.recordAsync();
                setRecording(false);
                setCapture([videoData, ...captures]);
              }}
              onPress={async () => {
               await cameraRef.getSupportedRatiosAsync().then((data) => console.log(data));
                const photoData = await cameraRef.takePictureAsync();
                setRecording(false);
                setCapture([photoData, ...captures]);
              }}
            >
              <View style={[styles.captureBtn, recording && styles.captureBtnActive]}>{recording && <View style={styles.captureBtnInternal} />}</View>
            </TouchableWithoutFeedback>
          </Col>
          <Col style={styles.alignCenter}>
            <TouchableOpacity
              onPress={() => setCameraType(cameraType === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back)}
            >
              <Ionicons name='md-reverse-camera' color='white' size={30} />
            </TouchableOpacity>
          </Col>
        </Row>
      </Grid>
    </View>
  );
}

export default CameraScreen;
