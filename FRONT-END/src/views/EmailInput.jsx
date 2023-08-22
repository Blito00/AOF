import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScaledSheet } from 'react-native-size-matters';

const EmailInput = () => {
    const [email, setEmail] = useState(''); // Estado para almacenar el correo electrónico ingresado

    return (
        <View style={styles.inputContainer}>
            <Icon name="user" size={20} color="#b3b3b3" style={styles.icon} />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email} // Asigna el valor del estado al campo de entrada
                onChangeText={text => setEmail(text)} // Actualiza el estado cuando el texto cambia
                keyboardType="email-address" // Configura el tipo de teclado para correo electrónico
                autoCapitalize="none" // Desactiva la auto-capitalización
                autoCorrect={false} // Desactiva la corrección automática
            />
        </View>
    );
};

const styles = ScaledSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: '45@vs',
        width: '300@s',
        margin: '10@ms',
        marginLeft: '25@s',
        padding: '10@ms',
        borderRadius: 10,
        backgroundColor: '#FFFF',
        borderWidth: '0.80@ms',
        borderColor: "#b3b3b3"
    },
    input: {
        flex: 1,
    },
    icon: {
        marginRight: '10@ms',
    },
});

export default EmailInput;
