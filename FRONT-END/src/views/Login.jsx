import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Image, Text, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';

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
                <Image source={require('../../assets/img/OFICIOS-FORMOSA.png')} style={styles.img} />
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
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    input: {
        height: 40,
        width: 300,
        margin: 10,
        padding: 10,
        borderWidth: 0.1,
        borderRadius: 20,
        backgroundColor: '#FFFF'
    },
    button: {
        backgroundColor: 'black',
        borderRadius: 16,
        marginHorizontal: 100,
        marginBottom: 100
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: -30
    },
    img: {
        width: '80%',
        height: undefined,
        aspectRatio: 1,
        resizeMode: 'contain',
        borderRadius: 20
    },
    text: {
        marginLeft: 20,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 20,
    },
    
});

export default Login;
