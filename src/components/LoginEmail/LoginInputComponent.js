import React from "react";
import { StyleSheet, Text, View, Dimensions, TextInput } from "react-native";
import colors from "../../utils/colors";

const { height, width } = Dimensions.get("screen");

export default function LoginInputComponent() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Email or mobile number</Text>
      <TextInput style={styles.input} placeholder="example@example.com" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: height * 0.03,
  },
  title: {
    color: colors.dark,
    fontSize: 12,
    fontWeight: "bold",
    textTransform: "uppercase",
    paddingBottom: height * 0.01,
  },
  input: {
    color: colors.grey,
    borderBottomWidth: 2,
    paddingBottom: height * 0.01,
    borderBottomColor: "rgba(143, 146, 161, 0.2)",
    fontWeight: "500",
  },
});
