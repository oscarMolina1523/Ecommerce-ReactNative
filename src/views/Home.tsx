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
    flexDirection:'column',
    width: '100%',
    // backgroundColor: '#FF0000',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop:40,
  },
});

export default HomeView;