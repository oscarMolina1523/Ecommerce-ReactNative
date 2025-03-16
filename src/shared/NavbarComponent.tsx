import { Ionicons } from '@expo/vector-icons';
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const NavbarComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Fola<Ionicons name="hand-left-outline" color="orange" size={20} /></Text>
      <Text style={{color:'#AFAFAF', fontWeight:'bold'}}>Lets start shopping</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: 70,
    // backgroundColor: '#0000FF',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 10,
  },
  text: {
    fontSize: 24,
    textAlign: 'left',
    fontWeight:'bold'
  }
});

export default NavbarComponent;