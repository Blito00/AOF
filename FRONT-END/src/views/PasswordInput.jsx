import React, { useState } from 'react';
import { View } from 'react-native';
import { IconButton } from 'react-native-paper';
import { ScaledSheet } from 'react-native-size-matters';
import { Input } from 'react-native-elements/dist/input/Input';

const PasswordInput = () => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <View style={styles.inputContainer}>
            <Input
                leftIcon={{ type: 'material-icons', name: 'lock-outline', color: "#FFFF", size: 22 }}
                placeholder="Contraseña"
                onChangeText={text => setPassword(text)}
                value={password}
                secureTextEntry={!showPassword}
                placeholderTextColor="white"
                inputStyle={{color: 'white'}}
            />
            <IconButton
                style={styles.icon}
                icon={showPassword ? 'eye-off-outline' : 'eye-outline'}
                onPress={togglePasswordVisibility}
                iconColor='white'
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
    },
    input: {
        flex: 1,
        color: 'white',
        paddingRight: 40,
    },
    icon: {
        position: 'absolute',
        right: '15@s',
        top: '0@vs',
        color: '',
        margin: '0@ms'
    },
});

export default PasswordInput;
