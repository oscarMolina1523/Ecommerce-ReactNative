import { Ionicons } from '@expo/vector-icons';
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSingleProductContext } from '../context/SingleProductContext';
import { useUserContext } from '../context/UserContext';
import { CartItem } from '../models/Products';

const ProductDetail = () => {
  const { product } = useSingleProductContext();
  const {addToCart} = useUserContext();

  if (!product) return;

  const handleCart=()=>{
    const cartItem: CartItem = {
      ...product,
      quantity: 1, 
    };
    addToCart(cartItem); 
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerImg}>
        <Image style={styles.image} source={product.image} />
      </View>
      <View style={styles.containerInfo}>
        <Text style={{ color: '#404040', fontSize: 24, fontWeight: 'bold' }}>{product.name}</Text>
        <View style={{ width: '100%', flexDirection: 'row', gap: 4 }}>
          {[...Array(5)].map((_, index) => (
            <Ionicons key={index} size={25} style={{ color: 'yellow' }} name='star' />
          ))}
        </View>
        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{
            width: '40%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            // justifyContent: 'space-between',
            gap:6
          }}>
            <Text style={{ fontSize: 22, fontWeight: 'bold' }}>${product.priceWithDiscount}</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#AFAFAF', textDecorationLine: 'line-through' }}>${product.originalPrice}</Text>
          </View>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Available in stock</Text>
        </View>
        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>About</Text>
        <Text style={{ fontSize: 16, color: '#AFAFAF' }}>
          {product.description}
        </Text>
        <View style={{ height: 10 }} />
        <TouchableOpacity style={styles.button} onPress={handleCart}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#FFFFFF',
    textAlign: 'left'
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  containerImg: {
    width: '100%',
    height: 350,
    backgroundColor: '#F1F1F1',
    borderBottomLeftRadius: '40%',
    borderBottomRightRadius: '40%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerInfo: {
    width: '100%',
    alignItems: 'flex-start',
    padding: 10,
    gap: 6
  },
  button: {
    backgroundColor: '#F16A26',
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width:'100%',
    height:50,
    alignItems:'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold'
  },
});

export default ProductDetail;