import React from "react";
import { SafeAreaView, FlatList, StyleSheet } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import ViewVideoListScreen from "./ViewVideoScreen";

import customStyles from "../config/styles";
import { round } from "react-native-reanimated";

export default function VideoList({ navigation }) {
  const Videos = [
    {
      Videourl: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
      id: 1,
    },
    {
      Videourl: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
      id: 11,
    },
    {
      Videourl: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
      id: 113,
    },
    {
      Videourl: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
      id: 111,
    },
    {
      Videourl: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
      id: 112,
    },
  ];
  return (
    <SafeAreaView style={customStyles.container}>
      <FlatList
        data={Videos}
        renderItem={({ item }) => {
          return (
            <ViewVideoListScreen uri={item.Videourl} navigation={navigation} />
          );
        }}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
