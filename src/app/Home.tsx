import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import productsData from "../data/ProductsData";
import CategoryComponent from "../shared/CategoryComponent";
import NavbarComponent from "../shared/NavbarComponent";
import ProductPreview from "../shared/ProductPreview";
import PromotionsCarousel from "../shared/PromotionsCarousel";


const HomeView = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <NavbarComponent />
      <PromotionsCarousel />
      <CategoryComponent />
      <View style={styles.products}>
        {productsData.map(product => (
          <ProductPreview
            product={product}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 40,
    paddingHorizontal: 10,
    gap: 20,
  },
  products: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    width: '100%',
    // paddingHorizontal:20,
    gap: 4
  }
});

export default HomeView;