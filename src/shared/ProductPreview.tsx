import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ProductPreview = () => {
  return (
    <View style={styles.container}>
      <Text>this is the product preview</Text>
    </View>
  );
}

const styles= StyleSheet.create({
  container:{
    display:'flex',
    flexDirection:'column',
    height:150,
    width:'100%',
    backgroundColor:'#F8F8F8',
    borderRadius:8,
    padding:10
  }
});

export default ProductPreview;