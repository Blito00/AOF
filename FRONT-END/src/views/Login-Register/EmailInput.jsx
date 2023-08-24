import React, { useState } from 'react';
import { View } from 'react-native';
import { Input } from '@rneui/themed';
import { ScaledSheet } from 'react-native-size-matters';


const EmailInput = () => {
    const [email, setEmail] = useState('');

    return (
        <View style={styles.inputContainer}>
            <Input
                leftIcon={{type: 'font-awesome-5', name: 'at', color: "#FFFF", size: 22  }}
                placeholder='Email'
                value={email}
                onChangeText={text => setEmail(text)}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                inputStyle={styles.input}
                placeholderTextColor="white"
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

    },
});

export default EmailInput;