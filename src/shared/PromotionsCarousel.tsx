import React, { useRef } from "react";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import PromotionComponent from "./PromotionComponent";

const { width } = Dimensions.get("window");
//this is for calculate the 90% of the window
const carouselWidth = width * 0.9; // 90% del ancho de la pantalla

const promotions = [
  { id: '1', title: '20% OFF DURING THE WEEKEND', color: '#F17547', imageUrl: 'https://i.ibb.co/Xr74J5Vt/two-bags.webp' },
  { id: '2', title: 'BUY ONE GET ONE FREE', color: '#1383F1', imageUrl: 'https://i.ibb.co/hJfsTWQQ/bags.webp' },
  { id: '3', title: 'FREE SHIPPING ON ORDERS OVER $50', color: '#4747F1', imageUrl: 'https://i.ibb.co/hJfsTWQQ/bags.webp' },
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
        snapToAlignment="center"
        snapToInterval={width} 
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <PromotionComponent title={item.title} backgroundColor={item.color} imageUrl={item.imageUrl} />
          </View>
        )}
        contentContainerStyle={{ gap: 4 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display:'flex',
    // flexDirection:'row',
    alignItems: "center",
    justifyContent: 'center',
    width: '100%',
  },
  slide: {
    width: carouselWidth,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PromotionsCarousel;
