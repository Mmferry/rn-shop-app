import React from "react";
import { Platform, View, Button, SafeAreaView } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { createCompatNavigatorFactory } from "@react-navigation/compat";
import { useDispatch } from "react-redux";

import Colors from "../constants/Colors";
import ProductsOverViewScreen from "../screens/shop/ProductsOverviewScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import CartScreen from "../screens/shop/CartScreen";
import OrdersScreen from "../screens/shop/OrdersScreen";
import UserProductsScreen from "../screens/user/UserProductsScreen";
import EditProductScreen from "../screens/user/EditProductScreen";
import AuthScreen from "../screens/user/AuthScreen";
import * as authActions from "../store/actions/authActions";

const Stack = createStackNavigator();

const defaultStyle = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "transparent",
  },
  headerTintColor: Platform.OS === "android" ? "#fff" : Colors.primary,
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
  headerMode: "screen",
};

export const ProductsNavigator = () => {
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
        name="ProductsOverView"
        component={ProductsOverViewScreen}
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

export const OrdersNavigator = () => {
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

export const AdminNavigator = () => {
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
        name="UserProducts"
        component={UserProductsScreen}
        options={{
          title: "My Products",
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
        name="EditProduct"
        component={EditProductScreen}
        options={{
          title: "Edit Product",
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

export const ShopNavigator = () => {
  const dispatch = useDispatch();

  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        return (
          <View style={{ flex: 1, paddingTop: 20 }}>
            <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
              <DrawerItemList {...props} />
              <Button
                title="Logout"
                color={Colors.primary}
                onPress={() => {
                  dispatch(authActions.logout());
                }}
              />
            </SafeAreaView>
          </View>
        );
      }}
      drawerContentOptions={{
        activeTintColor: Colors.primary,
      }}
    >
      <Drawer.Screen
        name="Products"
        component={ProductsNavigator}
        options={{
          drawerIcon: (props) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-cart" : "ios-cart"}
              size={23}
              color={props.color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Orders"
        component={OrdersNavigator}
        options={{
          drawerIcon: (props) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-list" : "ios-list"}
              size={23}
              color={props.color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Admin"
        component={AdminNavigator}
        options={{
          drawerIcon: (props) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-create" : "ios-create"}
              size={23}
              color={props.color}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export const AuthNavigator = () => {
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
        name="Login"
        component={AuthScreen}
        options={{
          title: "",
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
