import { View, Text, StyleSheet, Alert, ImageBackground, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import AppTheme from '../../AppTheme';



var app_Design = require('../Login/AppDesign.png');
var welcomeBack = require('../Login/welcomeback.png');
var backImg = require('../Login/back_white.png');
var showIcon = require('../../Images/icon_password_hide.png');
var hideIcon = require('../../Images/icon_password_show.png');

const win = Dimensions.get('window');

const PwdConfirmPwd = () => {

    const navigation = useNavigation();
    const [values, setText] = useState({ password: '', confirmPwd: '' });
    const [isSecureEntry, setIsSecureEntry] = useState(true);
    const [isSecureEntry2, setIsSecureEntry2] = useState(true);

    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

    const handleEnterPwdChange = (inputText) => {

        console.log(inputText)
        setText({
            ...values,
            password: inputText,
        });
    }

    const handleConfirmPwdChange = (inputText) => {

        console.log(inputText)
        setText({
            ...values,
            confirmPwd: inputText,
        });
    }

    const handleRegister = () => {
        //inputText.preventDefault();
        setSubmitted(true);

        if (values.password.trim() && values.confirmPwd.trim()) {
            if (values.password == values.confirmPwd) {
                setValid(true)
                navigation.navigate('VerifyEmail');
                // callAPIforRegisterUser_withEmailpassword(values.confirmPwd)

            } else {
                Alert.alert('Passwords do not match')
            }
        }

    }

    const callAPIforRegisterUser_withEmailpassword = (password) => {

        let userEmail = AsyncStorage.getItem('userEmail')

        console.log(userEmail)

        // let parameters = {
        //     "email": userEmail,
        //     "isUserLikeToReceiveNewsLetter": false,
        //     "password": password
        // }

        // const headers = { 
        //     'x-auth': '',
        //     'Content-Type': 'application/json'
        // };

        //   console.log(userEmail)

        // //Calling Api
        // axios.post('https://api.staging.co-tasker.com/api/V10/registerUserWithEmail?',parameters,{headers})
        //     .then(function (response) {
        //           alert(JSON.stringify(response.data));

        //         if (response != null) {
        //            // setNews(response.data)
        //            //navigation.navigate('ConfirmPwd');

        //         }

        //     })
        //     .catch(error => {
        //    res = {status: err.response.status, message: err.response.data};
        //     });

    }

    return (
        <View style={styles.container}>
            <ImageBackground
                source={app_Design}
                style={{ height: '100%', width: '100%' }}>

                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack()
                    }}>
                    <Image source={backImg}
                        resizeMode={'contain'}
                        style={{
                            marginTop: 60,
                            marginLeft: 35, height: 25, width: 24
                        }} />

                </TouchableOpacity>
                <Text style={styles.titleStyle} > Join Co-Tasker
                </Text>

                <ImageBackground source={welcomeBack}
                    resizeMode={'contain'}
                    style={{ height: win.height, width: win.width }}>


                    <View style={{ flexDirection: 'column', marginHorizontal: win.width * 0.06, marginTop: 190 }}>
                        <Text style={styles.passwordTitle} > Password </Text>

                        <View style={styles.passwordContainer}>
                            <TextInput
                                style={styles.inputText}
                                secureTextEntry={isSecureEntry}
                                placeholder="Enter your password"
                                autoCorrect={false}
                                onChangeText={handleEnterPwdChange}
                                value={values.password}
                            />
                            <View style={{ justifyContent: 'center' }}>
                                <TouchableOpacity
                                    onPress={() => {
                                        setIsSecureEntry(!isSecureEntry)
                                    }}>
                                    <Image source={isSecureEntry ? showIcon : hideIcon}
                                        resizeMode={'contain'}
                                        style={{
                                            height: 25, width: 22,
                                        }} />

                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ marginTop: 20 }}>

                            <Text style={styles.passwordTitle} > Confirm Password
                            </Text>
                            <View style={styles.passwordContainer}>
                                <TextInput
                                    style={styles.inputText}
                                    secureTextEntry={isSecureEntry2}
                                    placeholder="Confirm your password"
                                    autoCorrect={false}
                                    onChangeText={handleConfirmPwdChange}
                                    value={values.confirmPwd}
                                />
                                <View style={{ justifyContent: 'center' }}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            setIsSecureEntry2(!isSecureEntry2)
                                        }}>
                                        <Image source={isSecureEntry2 ? showIcon : hideIcon}
                                            resizeMode={'contain'}
                                            style={{
                                                height: 25, width: 22,
                                            }} />

                                    </TouchableOpacity>
                                </View>


                            </View>

                        </View>

                        <View style={{ flexDirection: 'column', marginTop: 55 }}>

                            <Text style={styles.validationPoints}>{'\u25CF'}  At least 8 characters</Text>
                            <Text style={styles.validationPoints}>{'\u25CF'}  A mixture of uppercase and lowercase letters</Text>
                            <Text style={styles.validationPoints}>{'\u25CF'}  A mixture of letters and numbers</Text>

                        </View>
                        <View style={{ justifyContent: 'flex-end', marginTop:160 }}>

<TouchableOpacity style={styles.button}

    onPress={() => {
        handleRegister()
    }}>

    <Text style={styles.buttonText}>Register</Text></TouchableOpacity>
</View>

                    </View>



                    

                </ImageBackground>




            </ImageBackground>




        </View>

    );
}

export default PwdConfirmPwd;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },

    containerEmail: {
        flex: 1,
    },

    titleStyle: {
        marginTop: 25,
        marginLeft: 35,
        textAlign: 'left',
        fontSize: 25,
        color: 'white',
        fontWeight: "bold"
    },

    passwordTitle: {
        fontSize: 15,
        color: 'grey',
        fontFamily: AppTheme.regularfont
    },

    confirmPwdTitle: {
        marginTop: 12,
        fontSize: 13,
        color: 'grey',
        fontWeight: 'normal'
    },

    passwordContainer: {

        flexDirection: 'row',
        borderBottomWidth: 0.6,
        borderColor: 'grey',
        justifyContent: 'center'
    },

    inputText:
    {
        flex: 1,
        fontFamily: AppTheme.regularfont,
        fontSize: 15,
        height: 40,
        justifyContent: 'center'
    },

    validationPoints: { fontSize: 13, color: 'grey', fontFamily: AppTheme.regularfont },

    button: {
        backgroundColor: AppTheme.yellowColor,
        borderRadius: 12,
        marginBottom: 40,
        paddingVertical: 14,
        // justifyContent: 'flex-end',
        alignSelf: 'center',
        width: win.width - 40,

    },

    buttonText: {
        color: '#ffffff',
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    btnForgotPwd: {
        color: '#000',
        fontSize: 16,
        fontWeight: '400',
        textAlign: 'right',
        paddingRight: 30,
        marginTop: 10
    },
    errorMsgStyle: {

        fontSize: 12,
        color: 'red',
        textAlign: 'right',
        marginEnd: 30,
        paddingTop: 5

    }



});