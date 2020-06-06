import React from "react";
import { StyleSheet, Text, View, FlatList, Platform } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../../components/UI/HeaderButton";
import ProductItem from "../../components/shop/ProductItem";
import * as cartActions from "../../store/actions/cartActions";

const ProductsOverviewScreen = (props) => {
  const products = useSelector((state) => state.products.availableProducts);
  const dispatch = useDispatch()

  props.navigation.setOptions({
    headerTitle: 'All Products',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
          onPress={() => {
            props.navigation.toggleDrawer()
          }}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Cart"
          iconName={Platform.OS === "android" ? "md-cart" : "ios-cart"}
          onPress={() => {
            props.navigation.navigate("Cart")
          }}
        />
      </HeaderButtons>
    ),
  })

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onViewDetails={() => {
            props.navigation.navigate("ProductDetail", {
              productId: itemData.item.id,
              productTitle: itemData.item.title
            })
          }}
          onAddToCart={() => {
            dispatch(cartActions.addToCart(itemData.item))
          }}
        />
      )}
    />
  );
};

export default ProductsOverviewScreen;

const styles = StyleSheet.create({});
