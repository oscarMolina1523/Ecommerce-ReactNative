import React, { useRef } from "react";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import PromotionComponent from "./PromotionComponent";

const { width } = Dimensions.get("window");
//this is for calculate the 90% of the window
const carouselWidth = width * 0.9; // 90% del ancho de la pantalla

// const images = [
//   { uri: "https://los40.com/resizer/v2/V2SI7IAVKZD3NJILFWJMRE7JCA.jpg?auth=230f5aefd79e52816bc47f91444bbe7ce6b3a34ea36f3fbeca195d4fe01924b6&quality=70&width=1200&height=675&smart=true" },
//   { uri: "https://los40.com/resizer/v2/V2SI7IAVKZD3NJILFWJMRE7JCA.jpg?auth=230f5aefd79e52816bc47f91444bbe7ce6b3a34ea36f3fbeca195d4fe01924b6&quality=70&width=1200&height=675&smart=true" },
//   { uri: "https://los40.com/resizer/v2/V2SI7IAVKZD3NJILFWJMRE7JCA.jpg?auth=230f5aefd79e52816bc47f91444bbe7ce6b3a34ea36f3fbeca195d4fe01924b6&quality=70&width=1200&height=675&smart=true" },
// ];

const promotions = [
  { id: '1', title: 'Promotion 1', color: '#F17547' },
  { id: '2', title: 'Promotion 2', color: '#47F1A0' },
  { id: '3', title: 'Promotion 3', color: '#4747F1' },
];

const PromotionsCarousel = () => {
  const flatListRef = useRef<FlatList>(null);

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={promotions}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <PromotionComponent title={item.title} backgroundColor={item.color} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent:'center',
    width:'90%',
  },
  slide: {
    width:carouselWidth,
    justifyContent: "center",
    alignItems: "center",
  },
  // image: {
  //   width: "100%",
  //   height: 200,
  //   resizeMode: "cover",
  //   borderRadius: 16,
  // },
});

export default PromotionsCarousel;
