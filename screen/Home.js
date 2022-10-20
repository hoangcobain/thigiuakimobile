import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "react-native";
import Header from "../component/Header";
import Search from "../component/Search";
import BurgerList from "../component/BurgerList";

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Search />
      <BurgerList />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: StatusBar.currentHeight,
  },
});
