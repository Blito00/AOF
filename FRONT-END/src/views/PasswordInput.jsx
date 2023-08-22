import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importa el icono que desees (en este caso, FontAwesome)
import { IconButton } from 'react-native-paper';
import { ScaledSheet } from 'react-native-size-matters';

const PasswordInput = () => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <View style={styles.inputContainer}>
            <Icon name="lock" size={20} color="#b3b3b3" style={styles.icon} />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                onChangeText={text => setPassword(text)}
                value={password}
                secureTextEntry={!showPassword}
            />
            <IconButton
                icon={showPassword ? 'eye-off' : 'eye'}
                onPress={togglePasswordVisibility}
            />
        </View>
    );
};

const styles = ScaledSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: '0.80@ms',
        borderColor: "#b3b3b3",
        borderRadius: 10,
        backgroundColor: '#FFFF',
        height: '45@vs',
        width: '300@s',
        margin: '10@ms',
        marginLeft: '25@s',
        padding: '10@ms',
    },
    input: {
        flex: 1,
    },
    icon: {
        marginRight: '10@ms',
    },
});

export default PasswordInput;
