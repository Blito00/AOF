import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, ImageBackground, KeyboardAvoidingView } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import PasswordInput from './PasswordInput.jsx';
import EmailInput from './EmailInput.jsx';
import LoginButton from './LoginButton.jsx';
import * as Font from 'expo-font';

async function loadFonts() {
    await Font.loadAsync({
        'Product-Sans': require('../../assets/fonts/Product-Sans-Bold.ttf')
    });
}

loadFonts();

// const scaledWidth = scale(200);
// const scaledHeight = verticalScale(950);
// const scaledFontSize = moderateScale(16);
// const scaledMargin = moderateScale(10);

const Login = () => {




    return (

        <ImageBackground
            source={require('../../assets/img/diseno3.png')}
            style={styles.container}
            blurRadius={0}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={require('../../assets/img/ISOTIPO-AOF-BLANCO--2.png')} style={styles.img} />
                </View>
                <View style={styles}>
                    <Text style={styles.text}>Ingrese su correo:</Text>
                    <EmailInput />
                    <Text style={styles.text}>Ingrese su contraseña:</Text>
                    <PasswordInput />
                    <LoginButton />
                    <Image source={require('../../assets/img/empleo-blanco.png')} style={styles.img3} />
                </View>
            </View >

        </ImageBackground >
    );
    }

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    imageContainer: {
        alignItems: 'center',
    },
    img: {
        width: '180@s',
        height: undefined,
        aspectRatio: 1,
        resizeMode: 'contain',
        marginBottom: '50@ms'
    },
    img3: {
        width: '350@s',
        height: '31@vs',
        resizeMode: 'contain',
        marginTop: '50@ms'
    },
    text: {
        marginLeft: '20@ms',
        fontFamily: 'Product-Sans',
        fontSize: 25,
        color: '#FFFF',
        borderColor: '#000000'
    },
    LinkText: {
        marginLeft: "120@ms",
        marginRight: "120@ms",
        fontFamily: 'Product-Sans',
        fontSize: 25,
        color: '#ffaf63', // Cambia el color del enlace según tu diseño
        textDecorationLine: 'underline', // Subraya el texto para que parezca un enlace
    },
});

export default Login;
