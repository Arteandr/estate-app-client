//BASE
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";

//NAVIGATION
import { useNavigation } from "@react-navigation/native";

//COLORS
import colors from "../../utils/colors";

//SCREEN HEIGHT & WIDTH
const { height, width } = Dimensions.get("screen");

export default function NextStepComponent() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("LoginPassword")}>
      <View style={styles.button}>
        <Text style={styles.button__text}>Next step</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: width * 0.872,
    backgroundColor: colors.primary,
    height: height * 0.059,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 60,
  },
  button__text: {
    color: colors.white,
    fontSize: 14,
    fontWeight: "bold",
  },
});
