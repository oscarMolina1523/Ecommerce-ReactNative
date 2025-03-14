import React from "react";
import { StyleSheet, View } from "react-native";
import CategoryComponent from "../shared/CategoryComponent";
import NavbarComponent from "../shared/NavbarComponent";
import ProductPreview from "../shared/ProductPreview";
import PromotionsCarousel from "../shared/PromotionsCarousel";


const HomeView = () => {
  return (
    <View style={styles.container}>
      <NavbarComponent />
      <PromotionsCarousel />
      <CategoryComponent />
      <View style={styles.products}>
        <ProductPreview />
        <ProductPreview />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40,
    gap: 20,
  },
  products:{
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    alignItems:'flex-start',
    alignContent:'flex-start',
    width:'100%',
    paddingHorizontal:20,
    gap:4
  }
});

export default HomeView;