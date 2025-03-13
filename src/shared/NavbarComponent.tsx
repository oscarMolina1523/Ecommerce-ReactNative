import React from "react";
import { StyleSheet, Text, View } from "react-native";

const NavbarComponent=()=>{
  return(
    <View style={styles.container}>
      <Text>This is the navbar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1/3,
    backgroundColor: '#0000FF',
    alignItems: 'center',
    justifyContent: 'center',
    height: 5,
  },
});

export default NavbarComponent;