import { Ionicons } from '@expo/vector-icons';
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CategoryComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Top Categories</Text>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#F17547' }}>See all</Text>
      </View>
      <View style={styles.containerData}>
        <View style={styles.item}>
          <Ionicons style={{color:'#919191'}} size={50} name="shirt" />
        </View>
        <View style={styles.item}>
          <Ionicons style={{color:'#919191'}} size={50} name="bag" />
        </View>
        <View style={styles.item}>
          <Ionicons style={{color:'#919191'}} size={50} name="glasses" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: 'center',
    width: '90%',
    gap:20
  },
  containerHeader: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  containerData: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    gap: 4
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#D8D3D3',
    height: 100,
    width:100,
    borderWidth: 2,
    borderRadius:8,
  }
});

export default CategoryComponent;