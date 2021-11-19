import { View, Text, StyleSheet, Alert, ImageBackground, Image, TextInput, TouchableOpacity, Button, ScrollView, Pressable } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import AppTheme from '../../AppTheme';
import { Formik } from 'formik';
import * as yup from 'yup';

var app_Design = require('./AppDesign.png');
var welcomeBack = require('./welcomeback.png');
var backImg = require('../Login/back_white.png');


const win = Dimensions.get('window');

let emailValidationSchema = yup.object().shape({
    email: yup.string().email('Please enter valid email address').required('Please enter email'),
});

const Login = () => {

    const navigation = useNavigation();
   

    const handleSubmitBtnTap = (enteredEmail) =>  {
        
        if (enteredEmail != ""){
            //console.log("email Exists",enteredEmail)
            navigation.navigate('PasswordLogin')
        }

    }

    return (
        <View style={styles.container}>

            <Formik
                initialValues={{ email: '' }}
                validateOnMount={true}
                onSubmit={values => handleSubmitBtnTap(values.email)}
                validationSchema={emailValidationSchema}
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
                                    marginLeft: 30, height: 25, width: 25
                                }} />

                        </TouchableOpacity>

                        <Text style={styles.titleStyle} > Welcome Back
                        </Text>
                        <View style={styles.containerEmail}>
                            <ImageBackground source={welcomeBack}
                                resizeMode={'contain'}
                                style={{ height: win.height, width: win.width }}></ImageBackground>


                        </View>

                        <View style={{ flexDirection: 'column', marginHorizontal: win.width * 0.06, marginTop: 120 }}>
                            <Text style={styles.emailTitle} > Email Address
                            </Text>
                            <TextInput
                                style={styles.inputText}
                                placeholder="Enter your email address"
                                autoCapitalize='none'
                                keyboardType='email-address'
                                autoCorrect={false}
                                autoCompleteType='email'
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}

                            />
                            {(errors.email && touched.email) &&
                                <Text style={styles.errors}>{errors.email}</Text>
                            }

                            <TouchableOpacity style={styles.button}

                                onPress={
                                    handleSubmit
                                }>

                                <Text style={styles.buttonText}>Continue</Text>
                            </TouchableOpacity>


                        </View>


                        <View style={styles.signUpTextCont}>
                            <Text style={styles.signUpTextStyle}>Not a member of Co-Tasker yet?</Text>
                            <Pressable onPress={() => navigation.navigate('SignUp')}>
                                <Text style={styles.registerHere}>Register Here</Text>

                            </Pressable>
                        </View>



                    </ImageBackground>
                )}
            </Formik>

        </View>


    );


}

export default Login;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },

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

    emailTitle: {

        fontSize: 15,
        color: 'grey',
        fontFamily: AppTheme.regularfont

    },

    errors:{
        color:AppTheme.red_forValidationMsg,
        fontFamily:AppTheme.regularfont,
        fontSize:14,
        textAlign:'right',
        marginTop:2},

    inputText:
    {
        fontSize: 16,
        borderBottomColor: '#000',
        borderBottomWidth: 0.8,
        height: 40,
        fontFamily: AppTheme.regularfont

    },

    button: {
        backgroundColor: '#ffbf00',
        borderRadius: 12,
        marginVertical: win.height * 0.15,
        height: 50,
        justifyContent: 'center'

    },

    buttonText: {
        color: '#ffffff',
        fontSize: 19,
        fontFamily: AppTheme.boldfont,
        textAlign: 'center',
    },
    signUpTextCont: {
        marginBottom: 20,
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexGrow: 1
    },

    signUpTextStyle:
    {
        fontSize: 16,
        fontFamily: AppTheme.regularfont,
        color: 'grey',
    },

    buttonSignUP:
    {
        fontSize: 15,
        marginVertical: 10,
        fontWeight: 'normal',
        color: 'black',
    },

    registerHere: {
        fontFamily: AppTheme.semiboldfont,
        fontSize: 17,
        color: '#000'
    }

});