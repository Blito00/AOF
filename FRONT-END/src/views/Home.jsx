import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { Button } from 'react-native-elements';


export default function Home({ navigation }) {


    return (
            <View style={styles.container}>
            <Image
                    source={require('../../assets/img/LOGO-AOF2.png')}
                style={styles.image}/>
                <Text style={styles.text}>Bienvenid@ a Oficios Formosa!</Text>
                <Button
                    onPress={() => { navigation.navigate('login') }}
                    title="Ofrecer un oficio!"
                    buttonStyle={styles.button}
                    titleStyle={styles.buttonText}
                />
                <Button
                    onPress={() => { navigation.navigate('login') }}
                    title="Buscar un oficio!"
                    buttonStyle={styles.button2}
                    titleStyle={styles.buttonText}
                />
                <StatusBar style="auto  " />
            </View>
            

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#363533'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 25,
        color: "#FFFF",
        fontFamily: "Roboto",
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
        borderRadius: 10,
        marginHorizontal: 100,
        marginBottom: 10
    },
    button2: {
        backgroundColor: '#f7752f',
        borderRadius: 16,
        marginHorizontal: 100,
        marginBottom: 10
    },
    buttonText: {
        fontSize: 16,
    },
    image: {
        width: 300,
        height: 300,
        resizeMode: 'contain', // Ajusta el modo de redimensionamiento de la imagen
    },
});

