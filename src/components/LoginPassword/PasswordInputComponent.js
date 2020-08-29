//BASE
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";

//COLORS
import colors from "../../utils/colors";

//ICONS
import EyeIcon from "../../../assets/Icons/EyeIcon";

//SCREEN HEIGHT & WIDTH
const { height, width } = Dimensions.get("screen");

export default function PasswordInputComponent() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>password</Text>
      <View style={styles.input}>
        <TextInput
          style={styles.input__text}
          secureTextEntry={true}
          placeholder="● ● ● ● ● ●"
        />
        <TouchableOpacity>
          <EyeIcon />
        </TouchableOpacity>
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
  },
  input__text: {
    color: colors.grey,
    fontWeight: "500",
  },
});
