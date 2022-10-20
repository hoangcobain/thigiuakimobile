import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import image from "../assets/img/s.png";

export default function Search() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}>Find Best Burger in Your City</Text>
      <View style={styles.search}>
        <TextInput placeholder="Search" style={styles.input} />
        <Image source={image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    marginTop: 30,
  },
  input: {
    padding: 10,
    width: "70%",
    borderColor: "#333",
    borderWidth: 1,
    borderRadius: 30,
    fontSize: 16,
  },
  search: {
    marginTop: 20,
    width: 300,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
