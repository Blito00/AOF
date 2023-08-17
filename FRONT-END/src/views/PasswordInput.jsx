import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
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
        borderColor: '#f7752f',
        borderRadius: 20,
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
});

export default PasswordInput;
