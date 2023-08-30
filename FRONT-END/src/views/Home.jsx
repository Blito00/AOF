import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { ScaledSheet } from 'react-native-size-matters';


export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/img/LOGO-AOF2.png')}
                style={styles.image} />
            <Text style={styles.text}>Bienvenid@ a Oficios Formosa!</Text>
            <View style={styles.buttonContainer}>
                <Button
                    onPress={() => { navigation.navigate('login') }}
                    title="Ofrecer!"
                    buttonStyle={styles.button}
                    titleStyle={styles.buttonText}
                />
                <Button
                    onPress={() => { navigation.navigate('unlock') }}
                    title="Buscar"
                    buttonStyle={styles.button2}
                    titleStyle={styles.buttonText}

                />
            </View>

            <StatusBar style="auto  " />
        </View>


    );
}
const styles = ScaledSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(2,96,182,1)',
    },
    buttonContainer: {
        flexDirection: 'column',
        flex: 1,
    },
    text: {
        fontSize: '30@s',
        color: "#020f08",
        fontFamily: 'Product-Sans'
    },
    text1: {
        fontWeight: 'bold',
        fontSize: '15@s',
        color: "#ffff",
    },
    button: {
        backgroundColor: '#237834',
        borderRadius: '10@s',
        width: '300@s',
        height: '100@vs',
        marginTop: '10@vs',
    },
    button2: {
        backgroundColor: '#f7752f',
        borderRadius: '10@s',
        width: '300@s',
        height: '100@vs',
        marginTop: '10@vs',
    },
    buttonText: {
        fontSize: '30@s',
        fontFamily: 'Product-Sans'
    },
    image: {
        width: '300@s',
        height: '300@vs',
        resizeMode: 'contain',
    },
});

