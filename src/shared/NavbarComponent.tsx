import { Ionicons } from '@expo/vector-icons';
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const NavbarComponent = () => {
  return (
    <View style={styles.container}>
      <Ionicons size={30} name="menu" />
      <View>
        <Text style={styles.text}>Hello Fola</Text>
        <Text>Lets start shopping<Ionicons name="hand-left-outline" color="orange"/> </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 50,
    // backgroundColor: '#0000FF',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  text:{
    fontSize:20,
    textAlign:'right',
  }
});

export default NavbarComponent;