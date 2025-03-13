import React from "react";
import { StyleSheet, View } from "react-native";
import NavbarComponent from "../shared/NavbarComponent";
import PromotionsCarousel from "../shared/PromotionsCarousel";


const HomeView = () => {
  return (
    <View style={styles.container}>
      <NavbarComponent/>
      <PromotionsCarousel/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    width: '100%',
    // backgroundColor: '#FF0000',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop:40,
    gap:20,
  },
});

export default HomeView;