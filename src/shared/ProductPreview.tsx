import { Ionicons } from '@expo/vector-icons';
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Product } from '../models/Products';

interface ProductPreviewProps {
  product:Product;
  onPress: () => void;
}
const ProductPreview:React.FC<ProductPreviewProps> = ({product, onPress}) => {
  return (
    <TouchableOpacity id={product.id} style={styles.container} onPress={onPress}>
      <View style={styles.containerChild}>
        <TouchableOpacity style={styles.button} onPress={() => alert('discount')}>
          <Text style={styles.buttonText}>{product.discount} % OFF</Text>
        </TouchableOpacity>
        <View style={{ height: 35, width: 35, borderColor: '#D8D3D3', borderRadius: 25, borderWidth: 2, alignItems:'center', justifyContent:'center' }}>
          <Ionicons size={25} style={{ color: '#919191' }} name='heart' />
        </View>
      </View>
      <Image source={product.image} style={styles.image}/>
      <Text style={{ fontSize: 16, fontWeight: 'bold', color:'#3E3E3E', textAlign:'left'}}>{product.name}</Text>
      <View style={styles.containerChild}>
        <Text style={{fontSize:20, fontWeight:'bold'}}>${product.priceWithDiscount}</Text>
        <Text style={{fontSize:20, fontWeight:'bold', color:'#AFAFAF', textDecorationLine: 'line-through'}}>${product.originalPrice}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: 240,
    width: '48%',
    backgroundColor: '#F8F8F8',
    borderRadius: 16,
    padding: 10,
    alignItems:'center',
    justifyContent:'flex-start',
    gap:4,
    textAlign:'left'
  },
  image: {
    width: 100,
    height: 100,
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