/* eslint-disable prettier/prettier */

import { useState } from "react";
import { ActivityIndicator, ScrollView } from "react-native";
import { AppStatusBar } from "../../../components";
import {
  ButtonText,
  Container,
  Input,
  Label,
  MainButton,
  Wrapper,
} from "../../../components/components";

export const LoginScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleLogin = () => {
    setIsLoading(!isLoading);
  };
  return (
    <Container>
      <ScrollView>
        <AppStatusBar />
        <Wrapper>
          <Label>Email</Label>
          <Input placeholder="Email" />
          <Label>Password</Label>
          <Input placeholder="Password" />
          <MainButton onPress={handleLogin}>
            {isLoading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <ButtonText>LOGIN</ButtonText>
            )}
          </MainButton>
        </Wrapper>
      </ScrollView>
    </Container>
  );
};
