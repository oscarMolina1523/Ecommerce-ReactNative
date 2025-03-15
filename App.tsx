import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import HomeView from './src/app/Home';
import ProductDetail from './src/app/ProductDetail';

// Definir los parámetros de cada pantalla
export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // screenOptions={{ //con esto podemos personalizar el navbar en si sus diseños
        //   headerStyle: { backgroundColor: "#FEB53A" }, // Cambia el color del header
        //   headerTintColor: "#fff", // Color del texto e íconos
        //   headerTitleStyle: { fontWeight: "bold" }, // Estilos del título
        // }}
        screenOptions={{
          headerTitleAlign: "center", // Centra el título 
        }}
        initialRouteName="Home">
        <Stack.Screen options={{
          title: "Home", // Cambia el título de la pantalla
          headerLeft: () => (
            <TouchableOpacity onPress={() => alert("Menú abierto")}>
              <Ionicons name="menu" size={28} color="black" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={{ flexDirection: "row", gap: 15, marginRight: 10 }}>
              <TouchableOpacity onPress={() => alert("Buscar")}>
                <Ionicons name="search" size={28} color="black" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => alert("Perfil")}>
                <Ionicons name="person-circle-outline" size={28} color="black" />
              </TouchableOpacity>
            </View>
          ),
        }}
          name="Home" component={HomeView} />
        <Stack.Screen name="Details" component={ProductDetail} options={{ title: "Product Details" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
