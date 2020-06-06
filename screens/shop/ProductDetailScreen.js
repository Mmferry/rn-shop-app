import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Colors from "../../constants/Colors";
import * as CartActions from "../../store/actions/cartActions";

const ProductDetailScreen = (props) => {
  const { productId, productTitle } = props.route.params;
  const dispatch = useDispatch();

  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((prod) => prod.id === productId)
  );

  props.navigation.setOptions({
    title: productTitle,
  });

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
      <View style={styles.actions}>
        <Button color={Colors.primary} title="Add to cart" onPress={() => {
          dispatch(CartActions.addToCart(selectedProduct))
        }} />
      </View>
      <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
      <Text style={styles.desc}>{selectedProduct.description}</Text>
    </ScrollView>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  actions: {
    marginVertical: 10,
    alignItems: "center",
  },
  price: {
    fontSize: 20,
    color: "#888",
    textAlign: "center",
    marginVertical: 20,
    fontFamily: "open-sans"
  },
  desc: {
    textAlign: "center",
    fontSize: 14,
    marginHorizontal: 20,
    fontFamily: "open-sans"
  },
});
