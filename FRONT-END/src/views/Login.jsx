import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Image, Text, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import { moderateScale, scale, verticalScale, ScaledSheet } from 'react-native-size-matters';


// const scaledWidth = scale(200);
// const scaledHeight = verticalScale(950);
// const scaledFontSize = moderateScale(16);
// const scaledMargin = moderateScale(10);


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Aquí puedes implementar la lógica para autenticar al usuario
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (


        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Text style={styles.text}>Aplicación de Oficios Formosa</Text>
                <Image source={require('../../assets/img/ISOTIPO-AOF-BLANCO--2.png')} style={styles.img} />
            </View>
            <View>
                <Text style={styles.text}>Ingrese su correo:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    onChangeText={text => setEmail(text)}
                    value={email}
                />
                <Text style={styles.text}>Ingrese su contraseña:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Contraseña"
                    onChangeText={text => setPassword(text)}
                    value={password}
                    secureTextEntry
                />
                <Button
                    title="Ingresar"
                    onPress={handleLogin}
                    buttonStyle={styles.button}
                    titleStyle={styles.buttonText}
                />
                <Text style={styles.LinkText}>
                    ¿No tienes una cuenta? Registrate
                </Text>
            </View>
        </View>
    );
};

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#363533'
    },
    containerInput: {
        flex: 1,
        justifyContent: 'center',
    },
    input: {
        height: '80vs',
        width: '300@s',
        margin: '10@ms',
        marginLeft: '25@s',
        padding: '10@ms',
        borderRadius: 20,
        backgroundColor: '#FFFF',
        borderWidth: '1.25@ms',
        borderColor: '#f7752f',
    },
    button: {
        backgroundColor: '#f7752f',
        borderRadius: 16,
        marginHorizontal: '100@ms',
        marginBottom: '100@ms',
        marginTop: '30@ms'
    },
    buttonText: {
        fontSize: '16@ms',
        fontWeight: 'bold',
        color: 'black'
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: '10@ms'
    },
    img: {
        width: '200@s',
        height: undefined,
        aspectRatio: 1,
        resizeMode: 'contain',
        borderRadius: 20,
        marginTop: '40@ms'
    },
    text: {
        marginLeft: 20,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    },
    LinkText: {
        marginLeft: 60,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 15,
        color: '#5d5dde', // Cambia el color del enlace según tu diseño
        textDecorationLine: 'underline', // Subraya el texto para que parezca un enlace
    },
});

export default Login;
