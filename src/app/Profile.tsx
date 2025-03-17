import { Ionicons } from '@expo/vector-icons';
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const ProfileView = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.containerChild, { backgroundColor: '#0601B4' }]} >
        <View style={{ flexDirection: 'row', width: '70%', height: '100%', alignItems: 'center', justifyContent: 'space-between' , gap:4}}>
          <View style={{ width: '40%', height: '80%', borderRadius: '50%', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            <Image
              source={{ uri: 'https://i.pinimg.com/474x/48/6c/a0/486ca00640b169300b48e9ceacd8e401.jpg' }}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </View>
          <View style={{ width: '60%', height: '100%', alignItems: 'flex-start', justifyContent: 'center', overflow: 'hidden' ,}}>
            <Text style={{color:'#FFFFFF', fontWeight:'bold'}}>Itunuoluwa Abidoye</Text>
            <Text style={{color:'#FFFFFF'}}>@Itunuoluwa</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', width: '30%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
          <Ionicons size={30} style={{ color: '#FFFFFF' }} name='pencil' />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  containerChild: {
    width: '100%',
    height: 120,
    flexDirection: 'row',
    borderRadius: 16,
    padding: 6,
    overflow: 'hidden'
  }
});
export default ProfileView;