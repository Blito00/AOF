import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Login from './src/views/Login';



export default function App() {
  return (
    <ImageBackground
        source={require('./assets/img/fondo5.png')}
        style={styles.background}>
    <View style={styles.container}>
      <Login/>
      <StatusBar style="auto" />
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    resizeMode: 'cover'
  },
});
