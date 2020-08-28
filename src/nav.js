import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// [DEBUG] TEST COMPONENT  -----------NEED TO DELETE---------
const LoginEmail = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text onPress={() => navigation.navigate("LoginPassword")}>
        LoginEmail
      </Text>
    </View>
  );
};
// [DEBUG] TEST COMPONENT  -----------NEED TO DELETE---------
const LoginPassword = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text onPress={() => navigation.goBack()}>LoginPassword</Text>
    </View>
  );
};

// [TODO] Добавить для каждого экрана атрибут component={componentName} и импортировать их
function LoginNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="LoginEmail"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="LoginEmail" component={LoginEmail} />
      <Stack.Screen name="LoginPassword" component={LoginPassword} />
    </Stack.Navigator>
  );
}

// [TODO] Добавить для каждого экрана атрибут component={componentName} и импортировать их
function RegisterNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="RegisterOne" />
      <Stack.Screen name="RegisterTwo" />
      <Stack.Screen name="RegisterThree" />
    </Stack.Navigator>
  );
}

// [TODO] Добавить для каждого экрана атрибут component={componentName} и импортировать их
function ForgotNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ForgotPassword" />
      <Stack.Screen name="ForgotVerification" />
      <Stack.Screen name="ForgotReset" />
    </Stack.Navigator>
  );
}

function HomeNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="HomeTabNavigator" />
      <Tab.Screen name="LikeTabNavigator" />
      <Tab.Screen name="MailTabNavigator" />
      <Tab.Screen name="PersonTabNavigator" />
    </Tab.Navigator>
  );
}

function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginNavigator" component={LoginNavigator} />
      <Stack.Screen name="RegisterNavigator" component={RegisterNavigator} />
      <Stack.Screen name="ForgotNavigator" component={ForgotNavigator} />
      <Stack.Screen name="HomeNavigator" component={HomeNavigator} />
    </Stack.Navigator>
  );
}

export default MainStack;
