import { SingleProductProvider } from './src/context/SingleProductContext';
import { UserProvider } from './src/context/UserContext';
import Navigation from './src/Navigation';

export default function App() {
  return (
    <UserProvider>
      <SingleProductProvider>
        {/* <NavigationContainer>
          <Stack.Navigator
            // screenOptions={{ //con esto podemos personalizar el navbar en si sus diseños
            //   headerStyle: { backgroundColor: "#FEB53A" }, // Cambia el color del header
            //   headerTintColor: "#fff", // Color del texto e íconos
            //   headerTitleStyle: { fontWeight: "bold" }, // Estilos del título
            // }}
            screenOptions={{
              headerTitleAlign: "center" // Centra el título 
            }}
            initialRouteName="Home">
            <Stack.Screen options={({ navigation }) => ({
              title: "Home", // Cambia el título de la pantalla
              headerLeft: () => (
                <TouchableOpacity onPress={() => alert("Menú abierto")}>
                  <Ionicons name="menu" size={28} color="black" />
                </TouchableOpacity>
              ),
              headerRight: () => (
                <View style={{ flexDirection: "row", gap: 15, marginRight: 10 }}>
                  <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
                    <Ionicons name="cart" size={28} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                    <Ionicons name="person-circle-outline" size={28} color="black" />
                  </TouchableOpacity>
                </View>
              ),
            })}
              name="Home" component={HomeView} />
            <Stack.Screen name="Details" component={ProductDetail} options={{ title: "Product Details" }} />
            <Stack.Screen name="Profile" component={ProfileView} options={{ title: "Profile" }} />
            <Stack.Screen name="Cart" component={CartView} options={{ title: "My Cart" }} />
          </Stack.Navigator>
        </NavigationContainer> */}
        <Navigation/>
      </SingleProductProvider>
    </UserProvider>
  );
}
