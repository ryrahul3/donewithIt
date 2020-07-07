import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { Audio } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';

function CameraScreen(props) {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [recording, setRecording] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
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
      <Camera
        style={{ flex: 1 }}
        type={type}
        ref={(ref) => {
          setCameraRef(ref);
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            justifyContent: 'flex-end',
          }}
        >
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}
          >
            <TouchableOpacity
              style={{
                flex: 0.1,
                alignSelf: 'flex-end',
              }}
              onPress={() => {
                setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back);
              }}
            >
              <Ionicons name={Platform.OS === 'ios' ? 'ios-reverse-camera' : 'md-reverse-camera'} size={25} color='white' />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ alignSelf: 'center' }}
              onPress={async () => {
                if (cameraRef) {
                  let photo = await cameraRef.takePictureAsync();
                  console.log('photo', photo);
                }
              }}
            >
              <View
                style={{
                  borderWidth: 2,
                  borderRadius: 50,
                  borderColor: 'white',
                  height: 50,
                  width: 50,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <View
                  style={{
                    borderWidth: 2,
                    borderRadius: 50,
                    borderColor: 'white',
                    height: 40,
                    width: 40,
                    backgroundColor: 'white',
                  }}
                ></View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ alignSelf: 'center' }}
              onPress={async () => {
                if (!recording) {
                  setRecording(true);
                  let video = await cameraRef.recordAsync();
                  console.log('video', video);
                } else {
                  setRecording(false);
                  cameraRef.stopRecording();
                }
              }}
            >
              <View
                style={{
                  borderWidth: 2,
                  borderRadius: 50,
                  borderColor: 'red',
                  height: 50,
                  width: 50,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <View
                  style={{
                    borderWidth: 2,
                    borderRadius: 50,
                    borderColor: 'red',
                    height: 40,
                    width: 40,
                    backgroundColor: 'red',
                  }}
                ></View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Camera>
    </View>
  );
}

export default CameraScreen;
