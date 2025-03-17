import { Ionicons } from '@expo/vector-icons';
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useUserContext } from '../context/UserContext';

const ProfileView = () => {
  const {user} = useUserContext();
  if (!user) return;

  return (
    <View style={styles.container}>
      <View style={[styles.containerChild, { backgroundColor: '#0601B4' }]} >
        <View style={{ flexDirection: 'row', width: '80%', height: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
          <View style={{ width: '30%', height: '80%', borderRadius: '50%', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            <Image
              source={{ uri: 'https://i.pinimg.com/474x/48/6c/a0/486ca00640b169300b48e9ceacd8e401.jpg' }}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </View>
          <View style={{ width: '60%', height: '100%', alignItems: 'flex-start', justifyContent: 'center', overflow: 'hidden', }}>
            <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 22, }}>{user.name}</Text>
            <Text style={{ color: '#FFFFFF' }}>@{user.userName}</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', width: '20%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
          <Ionicons size={30} style={{ color: '#FFFFFF' }} name='pencil' />
        </View>
      </View>
      <View style={[styles.containerChild, { backgroundColor: '#D7D7D7' }]} >
        <View style={{ flexDirection: 'row', width: '80%', height: '100%', alignItems: 'center', justifyContent: 'space-between', gap: 4 }}>
          <View style={{ width: '20%', height: '50%', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', backgroundColor:'#F3F2FB', borderRadius:'50%' }}>
            <Ionicons size={40} style={{ color: '#413DC6' }} name='log-out' />
          </View>
          <View style={{ width: '80%', height: '100%', alignItems: 'flex-start', justifyContent: 'center', overflow: 'hidden', }}>
            <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 22, }}>Logout</Text>
            <Text style={{ color: '#FFFFFF' }}>Further secure your account for safety</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', width: '20%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
          <Ionicons size={30} style={{ color: '#FFFFFF' }} name='chevron-forward' />
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
    justifyContent: 'flex-start',
    gap: 6
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