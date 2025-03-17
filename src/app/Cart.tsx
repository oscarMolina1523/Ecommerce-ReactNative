import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CartView = () => {
  const [quantity, setQuantity] = useState(1);


  return (
    <View style={styles.container}>
      <View style={styles.containerChild}>
        <View style={{ width: '30%', height: '100%', backgroundColor: '#E6E5D9', borderRadius: 16, alignItems: 'center', justifyContent: 'center' }}>
          <Image
            source={{ uri: 'https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/apple-watch-series-9.png' }}
            style={{ objectFit: 'contain', width: '100%', height: '100%' }}
          />
        </View>
        <View style={{ width: '70%', height: '100%', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
          <Text style={{ color: '#404040', fontSize: 20, fontWeight: 'bold' }}>Apple w-series 6</Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>$300</Text>
          <View style={{ width: '100%', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
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
                onPress={() => setQuantity(prev => Math.max(1, prev - 1))}
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
              }}>{quantity}</Text>

              <TouchableOpacity
                style={{
                  paddingVertical: 5,
                  paddingHorizontal: 15,
                }}
                onPress={() => setQuantity(prev => prev + 1)}
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
          <Text style={{ color: '#D65C15', fontSize: 20, fontWeight: 'bold' }}>$300</Text>
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
    height: '100%'
  },
  containerChild: {
    width: '90%',
    padding: 10,
    flexDirection: 'row',
    backgroundColor: '#F8F8F8',
    height: 120,
    borderRadius: 16,
    gap: 6
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