import { Ionicons } from '@expo/vector-icons';
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useUserContext } from "../context/UserContext";
import { CartItem } from "../models/Products";

interface CartItemProps {
  product: CartItem;
}

const CartItemComponent: React.FC<CartItemProps> = ({ product }) => {
  const { updateCartItemQuantity, removeFromCart, } = useUserContext();

  const updateQuantity = (newQuantity: number) => {
    if (newQuantity > 0) {
      updateCartItemQuantity(product.id, newQuantity);
    }
  };

  const removeItem=(id: string)=>{
    removeFromCart(id);
  }

  return (
    <View style={styles.containerChild}>
      <View style={{ width: '30%', height: '100%', backgroundColor: '#E6E5D9', borderRadius: 16, alignItems: 'center', justifyContent: 'center' }}>
        <Image
          source={product.image}
          style={{ objectFit: 'contain', width: '100%', height: '100%' }}
        />
      </View>
      <View style={{ width: '70%', height: '100%', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
        <Text style={{ color: '#404040', fontSize: 20, fontWeight: 'bold' }}>{product.name}</Text>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>${product.priceWithDiscount}</Text>
        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <TouchableOpacity onPress={() => removeItem(product.id)} style={{ height: 35, width: 35, borderColor: 'red', borderRadius: 25, borderWidth: 2, alignItems: 'center', justifyContent: 'center' }}>
            <Ionicons size={25} style={{ color: 'red' }} name='trash' />
          </TouchableOpacity>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 2,
            borderColor: '#D65C15',
            borderRadius: 8,
            backgroundColor: '#FFFFFF',
            padding: 5,
          }}>
            <TouchableOpacity
              style={{
                paddingVertical: 5,
                paddingHorizontal: 15,
              }}
              onPress={() => updateQuantity(Math.max(1, product.quantity - 1))}
            >
              <Text style={{
                fontSize: 22,
                fontWeight: 'bold',
                color: '#D65C15',
              }}>-</Text>
            </TouchableOpacity>

            <Text style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: '#000000',
              marginHorizontal: 10,
            }}>{product.quantity}</Text>

            <TouchableOpacity
              style={{
                paddingVertical: 5,
                paddingHorizontal: 15,
              }}
              onPress={() => updateQuantity(product.quantity + 1)}
            >
              <Text style={{
                fontSize: 22,
                fontWeight: 'bold',
                color: '#D65C15',
              }}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerChild: {
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    backgroundColor: '#F8F8F8',
    height: 120,
    borderRadius: 16,
    gap: 6
  },
})

export default CartItemComponent;