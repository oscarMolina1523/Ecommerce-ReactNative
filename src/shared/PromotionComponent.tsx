import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface PromotionComponentProps {
  title: string; // Prop para el título de la promoción
  backgroundColor: string; // Prop para el color de fondo
  imageUrl: string; // Prop para la URL de la imagen
}

const PromotionComponent: React.FC<PromotionComponentProps> = ({ title, backgroundColor, imageUrl }) => {
  return (
    <View style={[styles.container, { backgroundColor }]}> {/* Usar el color de fondo pasado como prop */}
      <Text style={styles.text}>{title}</Text>
      <TouchableOpacity style={styles.button} onPress={() => alert(`Getting ${title}`)}>
        <Text style={styles.buttonText}>Get Now</Text>
      </TouchableOpacity>
      <Image source={{ uri: imageUrl }} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    justifyContent: 'flex-start',
    width: '100%',
    height: 200,
    borderRadius: 16,
    padding: 10,
    gap: 20,
    position: 'relative',
  },
  text: {
    fontSize: 24,
    textAlign: 'left',
    color: '#FFFFFF',
    fontWeight:'bold'
  },
  button: {
    backgroundColor: '#007BFF', 
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 20, 
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight:'bold'
  },
  image: {
    position: 'absolute', 
    bottom: 10, 
    right: 10,
    width: 150, 
    height: 150,
    resizeMode: 'contain',
  },
});

export default PromotionComponent;