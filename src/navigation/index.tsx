import MainStack from "./MainStack";

export const Router = () => {
    return (
      <NavigationContainer>
        <SafeAreaProvider>
          <MainStack />
        </SafeAreaProvider>
      </NavigationContainer>
    );
  };