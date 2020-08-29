//BASE
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
} from "react-native";

//COLORS
import colors from "../../utils/colors";

//COMPONENTS
import EmailInputComponent from "../../components/LoginEmail/EmailInputComponent";
import NextStepComponent from "../../components/LoginEmail/NextStepComponent";
import CreateAccountComponent from "../../components/LoginEmail/CreateAccountComponent";

//SCREEN HEIGHT & WIDTH
const { height, width } = Dimensions.get("screen");

export default function LoginEmailScreen() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Image
          style={styles.background}
          source={require("../../../assets/images/BG.png")}
        />
        <View style={styles.main}>
          <Text style={styles.title}>Welcome Back!</Text>
          <Text style={styles.subtitle}>Enter your email or number</Text>
          <EmailInputComponent />
          <View style={styles.buttons}>
            <NextStepComponent />
            <Text style={styles.buttons__text}>or</Text>
            <CreateAccountComponent />
          </View>
          <View style={styles.terms}>
            <Text style={styles.terms__text}>
              By signing in you agree to our{" "}
            </Text>
            <TouchableOpacity>
              <Text style={styles.terms__link}>Terms of Service</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    width: width,
  },
  background: {
    resizeMode: "cover",
    width: width,
    position: "absolute",
  },
  main: {
    height: height * 0.566,
    backgroundColor: colors.white,
    marginTop: height * 0.44,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: height * 0.035,
    paddingLeft: width * 0.064,
    paddingRight: width * 0.064,
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
    paddingBottom: height * 0.023,
  },
  buttons: {
    alignItems: "center",
    paddingBottom: height * 0.06,
  },
  buttons__text: {
    paddingTop: height * 0.01,
    paddingBottom: height * 0.01,
    color: colors.grey,
    fontSize: 14,
    fontWeight: "500",
  },
  terms: {
    flexDirection: "row",
    justifyContent: "center",
  },
  terms__text: {
    color: colors.dark,
  },
  terms__link: {
    color: colors.primary,
  },
});
