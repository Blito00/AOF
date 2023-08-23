import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Input } from '@rneui/base';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import RePasswordInput from './RePasswordInput';

const Register = () => {
    const [name, setName] = useState('')
    const [surName, setSurName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        console.log('Registrando:', { name, surName, email, password });
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.text}>Ingrese su nombre(s):</Text>
                <Input
                    style={styles.input}
                    placeholder="Nombre(s)"
                    value={name}
                    onChangeText={text => setName(text)}
                    inputStyle={styles.input}
                    placeholderTextColor="white"
                />
                <Text style={styles.text}>Ingrese su apellido(s):</Text>
                <Input
                    style={styles.input}
                    placeholder="Apellido(s)"
                    value={surName}
                    onChangeText={text => setSurName(text)}
                    inputStyle={styles.input}
                    placeholderTextColor="white"
                />
            </View>
            <Text style={styles.text}>Ingrese su correo:</Text>
            <EmailInput />
            <Text style={styles.text}>Ingrese su contraseña:</Text>
            <PasswordInput />
            <Text style={styles.text}>Ingrese de nuevo su contraseña:</Text>
            <RePasswordInput />
        </View>
    );
};

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(2,96,182,1)',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: '45@vs',
        width: '300@s',
        margin: '10@ms',
        marginLeft: '25@s',
        padding: '10@ms',
    },
    input: {
        flex: 1,
        color: 'white',
    },
    text: {
        marginLeft: '20@ms',
        fontFamily: 'Product-Sans',
        fontSize: 25,
        color: '#FFFF',
        borderColor: '#000000'
    }
});

export default Register;
