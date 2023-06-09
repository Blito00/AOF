import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';


export default function Home({ navigation }) {


    return (

    <ImageBackground
        source={require('../../assets/img/fondo5.png')}
            style={styles.background}>

        <View style={styles.container}>
            <Text style={styles.text}>Bienvenid@ a Oficios Formosa!</Text>
            <Text style={styles.text1}>
                ¡¿Ofrece un oficio?! Ingrese en "Ofrecer".
            </Text>
            <Button
                onPress={() => {navigation.navigate('')}}
                title="Ofrecer"
                color="green"
            />
            <Text style={styles.text1}>
                ¡¿Busca un profesional?! Pulse en "Buscar".
            </Text>
            <Button
                onPress={() => {navigation.navigate('login')}}
                title="Buscar"
                buttonStyle={styles.button}
                titleStyle={styles.buttonText}
            />
            <StatusBar style="auto  " />

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
    text: {
    fontWeight: 'bold',
    fontSize: 25,
    color: "#000000",
    fontFamily: "Roboto",
    top: -280
    },
    text1: {
    fontWeight: 'bold',
    fontSize: 15,
    color: "#ffff",
    fontFamily: "Roboto",
        },
    background: {
    flex: 1,
    resizeMode: 'cover'
    },
    button: {
        backgroundColor: '#237834',
        borderRadius: 16,
        marginHorizontal: 100,
        marginBottom: 100
    },
    buttonText: {
        fontSize: 16,
    },
    });
    
