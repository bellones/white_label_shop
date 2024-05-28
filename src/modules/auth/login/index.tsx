/* eslint-disable prettier/prettier */
import React from "react";
import { ScrollView, View } from "react-native";
import AppStatusBar from "../../../components/appStatusBar";
import LoginStyles from "./styles/styles";
const LoginScreen = () => {
  return (
    <View style={LoginStyles.container}>
      <ScrollView>
        <AppStatusBar />

        
      </ScrollView>
    </View>
  );
};

export default LoginScreen;
