import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import ProductsOverScreen from "../screens/shop/ProductsOverviewScreen";
import Colors from "../constants/Colors";

const Stack = createStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={ProductsOverScreen}
        options={{
          title: "All Products",
          headerStyle: {
            backgroundColor: Platform.OS === "android" ? Colors.primary : "transparent",
          },
          headerTintColor:
            Platform.OS === "android" ? "#fff" : Colors.primary,
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
