import { StatusBar } from "expo-status-bar";

import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  StyleSheet,
} from "react-native";

import Item from "./Item";
import Pagination from "./Pagination";
import data from "../data";

const LOGO_HEIGHT = 40;
const LOGO_WIDTH = 220;

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" hidden />
      <FlatList
        keyExtractor={(item) => item.key}
        data={data}
        renderItem={({ item, index }) => <Item {...item} />}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        horizontal
      />
      <Image style={styles.logo} source={require("../assets/amazongo.png")} />
      <Pagination />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    opacity: 0.9,
    height: LOGO_HEIGHT,
    width: LOGO_WIDTH,
    resizeMode: "contain",
    position: "absolute",
    left: 10,
    bottom: 10,
    transform: [
      { translateX: -LOGO_WIDTH / 2 },
      { translateY: -LOGO_HEIGHT / 2 },
      { rotateZ: "-90deg" },
      { translateX: LOGO_WIDTH / 2 },
      { translateY: LOGO_HEIGHT / 2 },
    ],
  },
});

export default HomeScreen;
