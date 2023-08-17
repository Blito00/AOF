import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { moderateScale, scale, verticalScale, ScaledSheet } from 'react-native-size-matters';
import PasswordInput from './PasswordInput.jsx';
import EmailInput from './EmailInput.jsx';
import LoginButton from './LoginButton.jsx';

// const scaledWidth = scale(200);
// const scaledHeight = verticalScale(950);
// const scaledFontSize = moderateScale(16);
// const scaledMargin = moderateScale(10);

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword, showPassword] = useState('');

    const handleLogin = () => {
        // Aquí puedes implementar la lógica para autenticar al usuario
        console.log('Email:', email);
        console.log('Password:', password);
    };
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };



    return (


        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Text style={styles.text}>Aplicación de Oficios Formosa</Text>
                <Image source={require('../../assets/img/ISOTIPO-AOF-BLANCO--2.png')} style={styles.img} />
            </View>
            <View>
                <Text style={styles.text}>Ingrese su correo:</Text>
                <EmailInput />
                <Text style={styles.text}>Ingrese su contraseña:</Text>
                <PasswordInput />
                <LoginButton />
                <TouchableOpacity>
                    <Text style={styles.LinkText}>
                        Registrate!
                    </Text>
                </TouchableOpacity>
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
    imageContainer: {
        alignItems: 'center',
        marginBottom: '10@ms'
    },
    img: {
        width: '180@s',
        height: undefined,
        aspectRatio: 1,
        resizeMode: 'contain',
        marginTop: '40@ms'
    },
    text: {
        marginLeft: '20@ms',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    },
    LinkText: {
        marginLeft: '150@ms',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 15,
        color: '#5d5dde', // Cambia el color del enlace según tu diseño
        textDecorationLine: 'underline', // Subraya el texto para que parezca un enlace
    },
});

export default Login;
