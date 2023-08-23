import React from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import EmailInput from './EmailInput.jsx';
import PasswordInput from './PasswordInput.jsx';
import LoginButton from './LoginButton.jsx';
import Addons from './Addons.jsx';

const Login = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require('../../assets/img/ISOTIPO-AOF-BLANCO--2.png')} style={styles.img} />
            </View>
            <ScrollView
                keyboardShouldPersistTaps="always"
                contentContainerStyle={styles.scrollContent}
                scrollEnabled={false}
            >
                <Text style={styles.text}>Ingrese su correo:</Text>
                <EmailInput />
                <Text style={styles.text}>Ingrese su contraseña:</Text>
                <PasswordInput />
                <Addons />
                <LoginButton />
                <Image source={require('../../assets/img/empleo-blanco.png')} style={styles.img3} />
            </ScrollView>
            
        </View>
    );
}

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(2,96,182,1)',
    },
    imageContainer: {
        alignItems: 'center',
    },
    img: {
        width: '180@s',
        height: 'undefined',
        aspectRatio: 1,
        resizeMode: 'contain',
        marginBottom: '50@ms',
        marginTop: '100@ms'
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
    scrollContent: {
        flexGrow: 1,
        paddingBottom: 10, // Adjust this value as needed
    }
});

export default Login;
