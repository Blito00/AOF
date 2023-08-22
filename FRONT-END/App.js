import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, requireNativeComponent } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/views/Home.jsx'
import Login from './src/views/Login.jsx';


export default function App() {
  // instanciamos nuestro Stack que nos ayudara para crear la navegacion y las pantallas
  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home">
          <Stack.Screen name="home" options={{ headerShown: false }} component={Home} />
          <Stack.Screen name="login" options={{ headerShown: false }} component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
