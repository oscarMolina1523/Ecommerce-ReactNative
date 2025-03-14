import { Ionicons } from '@expo/vector-icons';
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
const RedmiNote = require('../../assets/images/RedmiNote.webp');

const ProductPreview = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerChild}>
        <TouchableOpacity style={styles.button} onPress={() => alert('discount')}>
          <Text style={styles.buttonText}>50 % OFF</Text>
        </TouchableOpacity>
        <View style={{ height: 35, width: 35, borderColor: '#D8D3D3', borderRadius: 25, borderWidth: 2, alignItems:'center', justifyContent:'center' }}>
          <Ionicons size={25} style={{ color: '#919191' }} name='heart' />
        </View>
      </View>
      <Image source={RedmiNote} style={styles.image} />
      <Text style={{ fontSize: 20, fontWeight: 'bold', color:'#3E3E3E'}}>Redmi Note 4</Text>
      <View style={styles.containerChild}>
        <Text style={{fontSize:20, fontWeight:'bold'}}>$5000</Text>
        <Text style={{fontSize:20, fontWeight:'bold', color:'#AFAFAF', textDecorationLine: 'line-through'}}>$5000</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: 300,
    width: '100%',
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
    padding: 10,
    alignItems:'center',
    justifyContent:'flex-start',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  containerChild: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#000000',
    fontSize: 12,
    fontWeight: 'bold'
  },
});

export default ProductPreview;