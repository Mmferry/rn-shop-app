import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Colors from "../constants/Colors";
import ProductsOverScreen from "../screens/shop/ProductsOverviewScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";

const Stack = createStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: false,
        headerBackTitle: "back",
        headerBackTitleStyle: {
          fontFamily: "open-sans",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={ProductsOverScreen}
        options={{
          title: "All Products",
          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? Colors.primary : "transparent",
          },
          headerTintColor: Platform.OS === "android" ? "#fff" : Colors.primary,
          headerTitleStyle: {
            fontFamily: "open-sans-bold",
          },
          headerMode: "screen",
        }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={{
          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? Colors.primary : "transparent",
          },
          headerTintColor: Platform.OS === "android" ? "#fff" : Colors.primary,
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerMode: "screen",
        }}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
