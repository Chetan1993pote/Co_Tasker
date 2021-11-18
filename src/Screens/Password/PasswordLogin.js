import { View, Text, StyleSheet, Alert, ImageBackground, Icon, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import AppTheme from '../../AppTheme';


var app_Design = require('../Login/AppDesign.png');
var welcomeBack = require('../Login/welcomeback.png');
var backImg = require('../Login/back_white.png');
var showIcon = require('../../Images/icon_password_hide.png');
var hideIcon = require('../../Images/icon_password_show.png');


const win = Dimensions.get('window');

const PasswordLogin = () => {

    const navigation = useNavigation();
    const [isSecureEntry, setIsSecureEntry] = useState(true);
    const [values, setText] = useState({ password: '' });

    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

    const handlePwdChange = (inputText) => {

        console.log(inputText)
        setText({
            ...values,
            password: inputText,
        });
    }

    const handleSubmit = (inputText) => {
        //inputText.preventDefault();
        setSubmitted(true);
        if (values.password) {
            setValid(true)
            navigation.navigate('Tabbar');
        } else {
            Alert.alert('Please enter password')
        }

    }


    validate = (text) => {
        console.log(text);

        if (!text.trim()) {
            Alert.alert("Please enter Password");

        }
        else {
            // Alert.alert("Email is Correct");
            navigation.navigate('Tabbar')
        }
    }


    return (
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
                        marginLeft: 35, height: 25, width: 25
                    }} />

            </TouchableOpacity>
            <Text style={styles.titleStyle} > Welcome Back
            </Text>

            <View style={styles.containerEmail}>
                <ImageBackground source={welcomeBack}
                    resizeMode={'contain'}
                    style={{ height: win.height, width: win.width }}></ImageBackground>
            </View>

            <View style={{ flexDirection: 'column', marginHorizontal: win.width * 0.06, marginTop: 200, flexGrow: 100 }}>
                <Text style={styles.passwordTitle} > Enter Password
                </Text>
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.inputText}
                        secureTextEntry={isSecureEntry}
                        placeholder="Password"
                        autoCorrect={false}
                        onChangeText={handlePwdChange}
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


                {/* {submitted && valid && !values.password ? <Text style={styles.errorMsgStyle} > Please enter Password */}
                {/* </Text> : null}   */}

                <TouchableOpacity

                    onPress={() => {
                        navigation.navigate('ForgotPwdScn');
                    }}>

                    <Text style={styles.btnForgotPwd}>Forgot Password?</Text>
                </TouchableOpacity>



            </View>

            <TouchableOpacity style={styles.button}

                onPress={() => {
                    handleSubmit()
                }}>

                <Text style={styles.buttonText}>Log in</Text>
            </TouchableOpacity>


        </ImageBackground>

    );
}

export default PasswordLogin;

const styles = StyleSheet.create({

    containerEmail: {
        flex: 1,

    },

    titleStyle: {
        marginTop: 25,
        marginLeft: 30,
        textAlign: 'left',
        fontSize: 23,
        color: 'white',
        fontFamily: AppTheme.boldfont
    },

    passwordContainer: {
        flexDirection: 'row',
        borderBottomWidth: 0.6,
        borderColor: 'grey',
        justifyContent: 'center'
    },

    passwordTitle: {
        fontSize: 15,
        color: 'grey',
        fontFamily: AppTheme.regularfont
    },

    inputText:
    {
        flex: 1,
        fontFamily: AppTheme.regularfont,
        fontSize: 16,
        height: 40,
        justifyContent: 'center'
    },

    button: {

        backgroundColor: AppTheme.yellowColor,
        borderRadius: 12,
        paddingVertical: 12,
        marginBottom: 40,
        justifyContent: 'flex-end',
        marginHorizontal: win.width * 0.06

    },

    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontFamily: AppTheme.boldfont,
        textAlign: 'center'
    },

    btnForgotPwd: {
        color: '#000',
        fontSize: 16,
        fontFamily: AppTheme.semiboldfont,
        textAlign: 'right',
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