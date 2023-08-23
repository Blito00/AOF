import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, requireNativeComponent } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/views/Home.jsx'
import Login from './src/views/Login.jsx';
import Register from './src/views/Register.jsx';
import * as Font from 'expo-font';


export default function App() {
  async function loadFonts() {
    await Font.loadAsync({
      'Product-Sans': require('./assets/fonts/Product-Sans-Bold.ttf')
    });
  }

  loadFonts();
  // instanciamos nuestro Stack que nos ayudara para crear la navegacion y las pantallas
  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home">
          <Stack.Screen name="home" options={{ headerShown: false }} component={Home} />
          <Stack.Screen name="login" options={{ headerShown: false }} component={Login} />
          <Stack.Screen name="register" options={{ headerShown: false }} component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
