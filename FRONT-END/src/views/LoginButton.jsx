import React from 'react';
import { Button } from 'react-native-elements';
import { ScaledSheet } from 'react-native-size-matters';

const LoginButton = ({ handleLogin }) => {
    return (
        <Button
            title="Ingresar"
            onPress={handleLogin}
            buttonStyle={styles.button}
            titleStyle={styles.buttonText}
        />
    );
};

const styles = ScaledSheet.create({
    button: {
        backgroundColor: '#f7752f',
        borderRadius: 16,
        marginHorizontal: '100@ms',
        marginBottom: '100@ms',
        marginTop: '30@ms'
    },
    buttonText: {
        fontSize: '16@ms',
        fontWeight: 'bold',
        color: 'black'
    },
});

export default LoginButton;