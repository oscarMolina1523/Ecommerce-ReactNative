import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useUserContext } from "../context/UserContext";
import CartItemComponent from "../shared/CartItem";

const CartView = () => {
  const {user}=useUserContext();

  if (!user) return;

  const total = user.cart.reduce((acc, product) => acc + (product.priceWithDiscount * product.quantity), 0) || 0;

  return (
    <View style={styles.container}>
      {user.cart.length === 0 ? (
        <Text>Aún no hay nada en el carrito</Text>
      ) : (
        user.cart.map(product => (
          <View key={product.id}>
            <CartItemComponent product={product} />
          </View>
        ))
      )}
      <View style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#FFFFFF',
        padding: 20,
        flexDirection: 'column',
        alignItems: 'flex-start',
        borderTopWidth: 1,
        borderColor: '#D65C15',
        gap:6
      }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <Text style={{ color: '#404040', fontSize: 20, fontWeight: 'bold' }}>Total</Text>
          <Text style={{ color: '#D65C15', fontSize: 20, fontWeight: 'bold' }}>${total.toFixed(2)}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => alert('To perform this action you must Login or Register')}>
          <Text style={styles.buttonText}>Buy Now</Text>
        </TouchableOpacity>
      </View >
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 15,
    paddingHorizontal:10,
    height: '100%', 
    gap:6
  },
  button: {
    backgroundColor: '#F16A26',
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '100%',
    height: 50,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold'
  },
})

export default CartView;