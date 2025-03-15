import { Ionicons } from '@expo/vector-icons';
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ProductDetail = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerImg}>
        <Image style={styles.image} source={{ uri: 'https://de-gdpr-exstatic-vivofs.vivo.com/sFhAQhTYYDsNOJz1/product/1726131237301/zip/img/webp/section13-pic1-mb.jpg.webp' }} />
      </View>
      <View style={styles.containerInfo}>
        <Text style={{ color: '#404040', fontSize: 24, fontWeight: 'bold' }}>Apple Watch Serie 6</Text>
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
            justifyContent: 'space-between',
          }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>$5000</Text>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#AFAFAF', textDecorationLine: 'line-through' }}>$5000</Text>
          </View>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Available in stock</Text>
        </View>
        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>About</Text>
        <Text style={{ fontSize: 16, color: '#AFAFAF' }}>
          The upgraded S6 SiP runs up to 20 percent faster,
          allowing apps to also launch 20 percent faster,
          while maintaining the same all-day 18-hour battery life.
        </Text>
        <View style={{ height: 10 }} />
        <TouchableOpacity style={styles.button} onPress={() => alert('To perform this action you must Login or Register')}>
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