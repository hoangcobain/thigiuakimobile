import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import image from "../assets/img/Star1.png";
import imageBurger from "../assets/img/b.png";
import imageHeart from "../assets/img/vh.png";

export default function BurgerItem() {
  return (
    <View style={styles.container}>
      <View style={styles.backGround}>
        <View style={styles.rating}>
          <Image source={image} style={styles.image} />
          <Text>4.2</Text>
        </View>
        <Image source={imageBurger} style={styles.imageBurger} />
      </View>
      <View>
        <Text>Peter Luger</Text>
        <View style={styles.price}>
          <Text>$44.00</Text>
          <Image source={imageHeart} style={styles.imageHeart} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    height: 50,
  },
  rating: {
    width: 50,
    flexDirection: "row",
    marginRight: 100,
  },
  image: {
    width: 100,
    height: 5,
  },
  imageBurger: {
    width: 150,
    height: 100,
  },
  backGround: {
    backgroundColor: "red",
    borderColor: "#333",
    borderRadius: 20,
    borderWidth: 1,
  },
  imageHeart: {
    width: 20,
    height: 20,
  },
  price: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
