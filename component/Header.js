import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import image from "../assets/img/v.png";
import imageTrump from "../assets/img/dn.png";
import Search from "./Search";

export default function Header() {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.textHeader}>Home</Text>
      <Image source={imageTrump} style={styles.imageTrump} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 40,
    color: "black",
  },
  imageTrump: {
    width: 50,
    height: 50,
  },
  textHeader: {
    fontSize: 20,
  },
});
