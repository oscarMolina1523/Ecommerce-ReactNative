import React from "react";
import { StyleSheet, Text, View, } from "react-native";


const HomeView = () => {
  return (
    <View style={styles.container}>
      <Text>This is the home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeView;