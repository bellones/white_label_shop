/* eslint-disable prettier/prettier */
import {
  Button,
  ButtonText,
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
  EyeIcon,
  EyeOffIcon,
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlHelper,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  Link,
  LinkText,
  VStack
} from "@gluestack-ui/themed";
import React from "react";
import { ScrollView } from "react-native";
import AppStatusBar from "../../../components/appStatusBar";
const LoginScreen = () => {
  return (
    <ScrollView style={{padding: 16, flex: 1, backgroundColor: 'white'}}>
      <AppStatusBar />
      <VStack justifyContent="space-between">
        <FormControl isInvalid={false} isRequired={true}>
          <Input>
            <InputField
              fontSize="$sm"
              placeholder="Email"
              type="text"
              onChangeText={(text) => console.log(text)}
              onSubmitEditing={() => {
                console.log("submit");
              }}
              returnKeyType="done"
            />
          </Input>
          <FormControlError>
            <FormControlErrorIcon as={null} size="md" />
            <FormControlErrorText>BATATA</FormControlErrorText>
          </FormControlError>
        </FormControl>

        <FormControl my="$6" isInvalid={false} isRequired={true}>
              <Input>
                <InputField
                  fontSize="$sm"
                  placeholder="Password"
                  onChangeText={() => {}}
                  onBlur={() => {}}
                  onSubmitEditing={() => {}}
                  returnKeyType="done"
                  type={true ? "text" : "password"}
                />
                <InputSlot onPress={() => {}} pr="$3">
                  <InputIcon as={true ? EyeIcon : EyeOffIcon} />
                </InputSlot>
              </Input>
     
          <FormControlError>
            <FormControlErrorIcon as={null} size="sm" />
            <FormControlErrorText>BATATA2</FormControlErrorText>
          </FormControlError>

          <FormControlHelper></FormControlHelper>
        </FormControl>
      </VStack>
      <Link onPress={() => {}} ml="auto">
        <LinkText fontSize="$xs">Forgot password?</LinkText>
      </Link>
          <Checkbox
            my="$5"
            size="sm"
            value="Remember me"
            aria-label="Remember me and keep me logged in"
            onChange={(value) => { console.log(value);}}
            alignSelf="flex-start"
          >
            <CheckboxIndicator mr="$2">
              <CheckboxIcon as={null} />
            </CheckboxIndicator>
            <CheckboxLabel>Remember me and keep me logged in</CheckboxLabel>
          </Checkbox>
 
      <Button variant="solid" size="lg" mt="$5" onPress={() => {}}>
        <ButtonText fontSize="$sm"> SIGN IN</ButtonText>
      </Button>
    </ScrollView>
  );
};

export default LoginScreen;
