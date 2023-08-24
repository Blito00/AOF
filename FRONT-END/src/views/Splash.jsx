import React, { useState } from 'react';
import { View, ImageBackground, Image, ActivityIndicator } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

const AOF = () => {

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/img/diseno3.png')}
                style={styles.backgroundImage}
            >
                <View style={styles.imageContainer}>
                    <Image source={require('../../assets/img/LOGO-AOF-BLANCO.png')} style={styles.centeredImage} />
                </View>
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="white" />
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = ScaledSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centeredImage: {
        width: '200@s',
        height: '200@vs',
        resizeMode: 'contain',
    },
    loadingContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '20@vs', // Añadir un espacio entre la imagen y el indicador
    },
});

export default AOF;
