import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import Feather from "react-native-vector-icons/Feather";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import AppStatusBar from "../../components/appStatusBar";
import { HomeScreen } from "../home";
import { OrderScreen } from "../order";
import { ProfileScreen } from "../profile";
import { SearchScreen } from "../search";

export const TabsScreen = () => {
  const Tab = createBottomTabNavigator();
  const tabItemOptions = {
    headerShown: false,
    backgroundColor: "white",
    showIcon: true,
    showLabel: false,
  };
  return (
    <>
    <AppStatusBar />
      <Tab.Navigator
        initialRouteName="Splash"
        sceneContainerStyle={{ backgroundColor: "white" }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName = "";
            if (route.name === "Home") {
              iconName = "home";
              return <SimpleLineIcons name={iconName} size={size} color={color} />;
            } else if (route.name === "Buscar") {
              iconName = "search";
              return <Feather name={iconName} size={size} color={color} />;
            } else if (route.name === "Pedidos") {
              iconName = "shopping-bag";
              return <Feather name={iconName} size={size} color={color} />;
            } else if (route.name === "Perfil") {
              iconName = "user";
              return <Feather name={iconName} size={size} color={color} />;
            }
          },
          tabBarInactiveTintColor: "gray",
          tabBarShowLabel: false,
        })}
      >
        <Tab.Screen
          name={"Home"}
          component={HomeScreen}
          options={tabItemOptions}
        />
        <Tab.Screen
          name={"Buscar"}
          component={SearchScreen}
          options={tabItemOptions}
        />
        <Tab.Screen
          name={"Pedidos"}
          component={OrderScreen}
          options={tabItemOptions}
        />
        <Tab.Screen
          name={"Perfil"}
          component={ProfileScreen}
          options={tabItemOptions}
        />
      </Tab.Navigator>
    </>
  );
};


