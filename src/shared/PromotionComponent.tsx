import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

interface PromotionComponentProps {
  title: string; // Prop para el título de la promoción
  backgroundColor: string; // Prop para el color de fondo
}

const PromotionComponent: React.FC<PromotionComponentProps> = ({ title, backgroundColor }) => {
  return (
    <View style={[styles.container, { backgroundColor }]}> {/* Usar el color de fondo pasado como prop */}
      <Text style={styles.text}>{title}</Text>
      <Button title="Get Now" onPress={() => alert(`Getting ${title}`)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: 'flex-start',
    width: '100%',
    height: 200,
    borderRadius: 16,
    padding: 10,
  },
  text: {
    fontSize: 20,
    textAlign: 'left',
    color: '#FFFFFF',
  }
});

export default PromotionComponent;