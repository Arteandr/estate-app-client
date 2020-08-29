//BASE
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";

//COLORS
import colors from "../../utils/colors";

//SCREEN HEIGHT & WIDTH
const { height, width } = Dimensions.get("screen");

export default function ForgotPasswordComponent() {
  return (
    <TouchableOpacity>
      <View style={styles.button}>
        <Text style={styles.button__text}>Forgot password</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: width * 0.872,
    backgroundColor: colors.white,
    height: height * 0.059,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "rgba(143, 146, 161, 0.2)",
  },
  button__text: {
    color: colors.dark,
    fontSize: 14,
    fontWeight: "bold",
  },
});
