import React from "react";
import { StyleSheet, Text, View, } from "react-native";
import NavbarComponent from "../shared/NavbarComponent";


const HomeView = () => {
  return (
    <View style={styles.container}>
      <NavbarComponent/>
      <Text>This is the home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FF0000',
    padding:2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeView;