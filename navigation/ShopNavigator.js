import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/Colors";
import ProductsOverScreen from "../screens/shop/ProductsOverviewScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import CartScreen from "../screens/shop/CartScreen";
import OrdersScreen from "../screens/shop/OrdersScreen";

const Stack = createStackNavigator();

const ProductNavigator = () => {
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
            fontFamily: "open-sans-bold",
          },
          headerMode: "screen",
        }}
      />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          title: "Cart Items",
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
    </Stack.Navigator>
  );
};

const OrdersNavigator = () => {
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
        name="Orders"
        component={OrdersScreen}
        options={{
          title: "Your orders",
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
    </Stack.Navigator>
  );
};

const Drawer = createDrawerNavigator();

const ShopNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={ProductNavigator}
        options={{
          drawerIcon: (drawerConfig) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-cart" : "ios-cart"}
              size={23}
              color={drawerConfig.tintColor}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Orders"
        component={OrdersNavigator}
        options={{
          drawerIcon: (drawerConfig) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-list" : "ios-list"}
              size={23}
              color={drawerConfig.tintColor}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default ShopNavigator;
