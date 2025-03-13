import React, { useRef } from "react";
import { Dimensions, FlatList, Image, StyleSheet, View } from "react-native";

const { width } = Dimensions.get("window");
//this is for calculate the 90% of the window
const carouselWidth = width * 0.9; // 90% del ancho de la pantalla

const images = [
  { uri: "https://los40.com/resizer/v2/V2SI7IAVKZD3NJILFWJMRE7JCA.jpg?auth=230f5aefd79e52816bc47f91444bbe7ce6b3a34ea36f3fbeca195d4fe01924b6&quality=70&width=1200&height=675&smart=true" },
  { uri: "https://los40.com/resizer/v2/V2SI7IAVKZD3NJILFWJMRE7JCA.jpg?auth=230f5aefd79e52816bc47f91444bbe7ce6b3a34ea36f3fbeca195d4fe01924b6&quality=70&width=1200&height=675&smart=true" },
  { uri: "https://los40.com/resizer/v2/V2SI7IAVKZD3NJILFWJMRE7JCA.jpg?auth=230f5aefd79e52816bc47f91444bbe7ce6b3a34ea36f3fbeca195d4fe01924b6&quality=70&width=1200&height=675&smart=true" },
];

const PromotionsCarousel = () => {
  const flatListRef = useRef<FlatList>(null);

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <Image source={{ uri: item.uri }} style={styles.image} />
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
    width:'90%'
  },
  slide: {
    width:carouselWidth,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
});

export default PromotionsCarousel;
