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
        backgroundColor: 'black',
        borderRadius: 20,
        marginHorizontal: '100@ms',
        marginBottom: '70@ms',
        marginTop: '30@ms'
    },
    buttonText: {
        fontSize: '16@ms',
        fontWeight: 'bold',
        color: 'white'
    },
});

export default LoginButton;