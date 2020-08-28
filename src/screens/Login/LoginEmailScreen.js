import React from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import colors from "../../utils/colors";
import LoginInputComponent from "../../components/LoginEmail/LoginInputComponent";

const { height, width } = Dimensions.get("screen");

export default function LoginEmailScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.background}
        source={require("../../../assets/images/BG.png")}
      />
      <View style={styles.main}>
        <Text style={styles.title}>Welcome Back!</Text>
        <Text style={styles.subtitle}>Enter your email or number</Text>
        <LoginInputComponent />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  background: {
    resizeMode: "cover",
    width: width,
    position: "absolute",
  },
  main: {
    height: height * 0.566,
    backgroundColor: colors.white,
    marginTop: height * 0.433,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: height * 0.05,
    paddingLeft: height * 0.03,
  },
  title: {
    color: colors.dark,
    fontSize: 22,
    fontWeight: "bold",
    paddingBottom: height * 0.01,
  },
  subtitle: {
    color: colors.grey,
    fontSize: 14,
  },
});
