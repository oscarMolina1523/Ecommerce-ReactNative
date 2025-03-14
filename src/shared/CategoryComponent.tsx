import { Ionicons } from '@expo/vector-icons';
import React, { useRef } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const categories = [
  { id: '1', name: 'shirt' },
  { id: '2', name: 'bag' },
  { id: '3', name: 'glasses' },
  { id: '4', name: 'star' },
  { id: '5', name: 'camera' },
];
const CategoryComponent = () => {
  const flatListRef = useRef<FlatList>(null);
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Top Categories</Text>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#F17547' }}>See all</Text>
      </View>
      <FlatList
        ref={flatListRef}
        data={categories}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        nestedScrollEnabled={true}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Ionicons size={50} style={{color:'#919191'}} name={item.name} />
          </View>
        )}
        // this is for add and gap between the elements
        contentContainerStyle={{ gap: 4 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flexDirection:'column',
    alignItems: "center",
    justifyContent: 'center',
    width: '100%',
    gap: 20
  },
  containerHeader: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#D8D3D3',
    height: 100,
    width: 100,
    borderWidth: 2,
    borderRadius: 8,
    marginHorizontal: 4,
  }
});

export default CategoryComponent;