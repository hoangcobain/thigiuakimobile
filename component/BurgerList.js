import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BurgerItem from "./BurgerItem";

export default function BurgerList() {
  return (
    <View style={styles.container}>
      <BurgerItem />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
