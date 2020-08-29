//BASE
import React from "react";
import { StyleSheet, Text, View, Dimensions, TextInput } from "react-native";

//COLORS
import colors from "../../utils/colors";

//ICONS
import CheckCircleIcon from "../../../assets/Icons/CheckCircleIcon";

//SCREEN HEIGHT & WIDTH
const { height, width } = Dimensions.get("screen");

export default function EmailInputComponent() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Email or mobile number</Text>
      <View style={styles.input}>
        <TextInput
          keyboardType="email-address"
          autoCorrect="false"
          autoCompleteType="off"
          textContentType="emailAddress"
          style={styles.input__text}
        />
        <CheckCircleIcon />
      </View>
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
    letterSpacing: 1,
  },
  input: {
    borderBottomWidth: 2,
    paddingBottom: height * 0.01,
    borderBottomColor: "rgba(143, 146, 161, 0.2)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: width * 0.05,
  },
  input__text: {
    color: colors.grey,
    fontWeight: "500",
    width: "100%",
  },
});
