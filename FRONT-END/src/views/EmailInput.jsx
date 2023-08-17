import React from 'react';
import { TextInput } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

const EmailInput = ({ setEmail, email }) => {
    return (
        <TextInput
            style={styles.input}
            placeholder="Email"
            
            onChangeText={text => setEmail(text)}
            value={email}
        />
    );
};

const styles = ScaledSheet.create({
    input: {
        height: '45@vs',
        width: '300@s',
        margin: '10@ms',
        marginLeft: '25@s',
        padding: '10@ms',
        borderRadius: 20,
        backgroundColor: '#FFFF',
        borderWidth: '0.80@ms',
        borderColor: '#f7752f',
    },
});

export default EmailInput;