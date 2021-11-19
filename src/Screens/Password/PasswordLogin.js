import { View, Text, StyleSheet, Alert, ImageBackground, Icon, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import AppTheme from '../../AppTheme';
import { Formik } from 'formik';
import * as yup from 'yup';


var app_Design = require('../Login/AppDesign.png');
var welcomeBack = require('../Login/welcomeback.png');
var backImg = require('../Login/back_white.png');
var showIcon = require('../../Images/icon_password_hide.png');
var hideIcon = require('../../Images/icon_password_show.png');

const win = Dimensions.get('window');

let passwordValidationSchema = yup.object().shape({
    password: yup.string()
        .required('Please enter password')
        .matches(
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/,
            'Please enter valid password!'
        ),
});


const PasswordLogin = () => {

    const navigation = useNavigation();
    const [isSecureEntry, setIsSecureEntry] = useState(true);


    const handlePwdSubmit = (inputText) => {

        if (inputText != ""){
           // console.log("email Exists",inputText)
            navigation.navigate('Tabbar')
        }

    }

    return (

        <Formik
            initialValues={{ password: '' }}
            validateOnMount={true}
            onSubmit={values => handlePwdSubmit(values.password)}
            validationSchema={passwordValidationSchema}
        >
            {({ handleChange, handleBlur, handleSubmit, values, touched, errors, isValid }) => (
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
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
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

                        {(errors.password && touched.password) &&
                                <Text style={styles.errors}>{errors.password}</Text>
                            }

                        <TouchableOpacity

                            onPress={() => {
                                navigation.navigate('ForgotPwdScn');
                            }}>

                            <Text style={styles.btnForgotPwd}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.button}

                        onPress={handleSubmit}>

                        <Text style={styles.buttonText}>Log in</Text>
                    </TouchableOpacity>


                </ImageBackground>
            )}


        </Formik>

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

    errors:{
    color:AppTheme.red_forValidationMsg,
    fontFamily:AppTheme.regularfont,
    fontSize:14,
    textAlign:'right',
    marginTop:2
},




});