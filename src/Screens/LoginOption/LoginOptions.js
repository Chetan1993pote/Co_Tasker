import { View, Image, StyleSheet, Text, Alert, TouchableOpacity, ImageBackground } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';

var backImg = require('../Login/back_white.png');


const win = Dimensions.get('window');


const LoginOptions = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <TouchableOpacity
                onPress={() => {
                    navigation.goBack()
                }}>
                <Image source={backImg}
                    resizeMode={'contain'}
                    style={{
                        marginTop: 60,
                        marginLeft: 35, height: 25, width: 25
                    }} />

            </TouchableOpacity>

            <Text style={styles.appTitle} > Co-Tasker
            </Text>


            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.loginBtn}

                    onPress={() => {
                        // Alert.alert('text')
                        navigation.navigate('Login')

                    }}>

                    <Text style={styles.loginbtnText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.registerBtn}

                    onPress={() => {
                        //Alert.alert('text')
                        navigation.navigate('SignUp')

                    }}>

                    <Text style={styles.registerbtnText}>Register</Text>
                </TouchableOpacity>
            </View>


        </View>
    );

}

export default LoginOptions;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#0f203a'
    },

    buttonContainer: {

        justifyContent: 'flex-end',
        alignItems:'center',
        marginBottom: 30,
        flexGrow: 1

    },

    appTitle: {
        marginTop: 50,
        alignSelf: 'center',
        fontSize: 40,
        color: 'white',
        fontWeight: 'bold'
    },
    loginBtn: {

        width: win.width - 30,
        borderRadius: 12,
        paddingVertical: 14,
        borderColor: 'white',
        borderWidth: 2,
        justifyContent: 'flex-end',

    },

    loginbtnText: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    registerBtn: {

        width: win.width - 30,
        borderRadius: 12,
        marginVertical: 30,
        borderColor: '#ffbf00',
        paddingVertical: 14,
        backgroundColor: '#ffbf00',
        borderWidth: 2,
        justifyContent: 'flex-end',
    },

    registerbtnText: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },


});