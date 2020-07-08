import React, { useState } from "react";
import {
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Video } from "expo-av";
import { Ionicons } from "@expo/vector-icons";
import customStyle from "../config/styles";
const { width, height } = Dimensions.get("window");

function ViewVideoListScreen({ uri, navigation }) {
  const [isPlay, setIsPlay] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("Video Player", { uri: uri })}
        onLongPress={() => setIsPlay(true)}
      >
        <Video
          style={{
            flex: 1,
            width: width,
            height: height / 4,
            marginBottom: 15,
            marginTop: 5,
          }}
          source={{ uri: uri }}
          rate={2.0}
          volume={5.0}
          isMuted={true}
          resizeMode="cover"
          shouldPlay={isPlay}
          isLooping={true}
          on
        />
      </TouchableWithoutFeedback>
      <View style={customStyle.bottomToolbar}>
        <Ionicons
          style={customStyle.alignCenter}
          name="md-reverse-camera"
          color="white"
          size={30}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  image: {
    width: width,
    height: height,
  },
  video: {
    width: width / 4,
    height: height / 4,
  },
});
export default ViewVideoListScreen;
