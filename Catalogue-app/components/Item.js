import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";

const { width, height } = Dimensions.get("window");

const Item = ({ imageUri, heading, desc }) => {
  return (
    <View style={styles.itemStyle}>
      <Image source={imageUri} style={styles.imageStyle} />
      <View>
        <Text style={styles.heading}>{heading}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemStyle: {
    width,
    height,
    alignItems: "center",
    justifyContent: "center",
  },
  imageStyle: {
    width: width * 0.75,
    height: height * 0.75,
    resizeMode: "contain",
    flex: 1,
  },
  textContainer: {
    alignItems: "flex-start",
    alignSelf: "flex-end",
    flex: 0.5,
  },
  heading: {
    color: "#444",
    textTransform: "uppercase",
    fontSize: 24,
    fontWeight: "800",
    letterSpacing: 2,
    marginBottom: 5,
  },
  desc: {
    color: "#ccc",
    fontWeight: "600",
    textAlign: "left",
    width: width * 0.75,
    marginRight: 10,
    fontSize: 16,
    lineHeight: 16 * 1.5,
  },
});

export default Item;
