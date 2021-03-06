
import { View, Text, StyleSheet, Alert, ImageBackground, Pressable, Image, TextInput, TouchableOpacity, Button, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import axios from 'axios';
import AppTheme from '../../AppTheme';
import { Formik } from 'formik';
import * as yup from 'yup';

var backImg = require('../Login/back_white.png');
var app_Design = require('../Login/AppDesign.png');
var welcomeBack = require('../Login/welcomeback.png');

const win = Dimensions.get('window');

let emailValidationSchema = yup.object().shape({
    email: yup.string().email('Please enter valid email address').required('Please enter email'),
});

const SignUp = () => {

    const navigation = useNavigation();
    const [text, setText] = useState('');

    const handleContinueBtnTap = (enteredEmail) => {

        if (enteredEmail != "") {
            //console.log("email Exists",enteredEmail)
            navigation.navigate('ConfirmPwd');
        }

    }

   
    const callAPIforCheckEmailRegistered_orNot = (email) => {

        let userEmail = { 'email': email }

        const headers = {
            'x-auth': '',
            'Content-Type': 'application/json'
        };

        console.log(userEmail)

        //Calling Api
        axios.post('https://api.staging.co-tasker.com/api/V10/isEmailRegistered?', userEmail, { headers })
            .then(function (response) {
                //  alert(JSON.stringify(response.data));

                if (response != null) {

                    // AsyncStorage.setItem('userEmail', email);

                    let statusCode = response.status
                    // alert(statusCode)
                    

                }

            })
            .catch(err => {
                res = { status: err.response.status, message: err.response.data };
                // alert(res.status)

                if (res.status == 400) {
                    navigation.navigate('ConfirmPwd');
                }
            });

    }

    return (

        <View style={styles.container}>

            <Formik
                initialValues={{ email: '' }}
                validateOnMount={true}
                onSubmit={values => handleContinueBtnTap(values.email)}
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
                                    marginTop: 55,
                                    marginLeft: 35, height: 25, width: 25
                                }} />

                        </TouchableOpacity>

                        <Text style={styles.titleStyle} > Join Co-Tasker
                        </Text>

                        <View style={styles.containerEmail}>
                            <ImageBackground source={welcomeBack}
                                resizeMode={'contain'}
                                style={{ height: win.height + 20, width: win.width }}>

                                <View style={{ flexDirection: 'column', marginTop: 190, marginHorizontal: win.width * 0.06 }}>
                                    <Text style={styles.emailTitle} > Email Address </Text>
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
                                </View>

                                <Text style={styles.termsPolicy} > I hereby accept the general <Text style={{ textDecorationLine: 'underline', color: '#000' }}>terms & conditions</Text> of Co-Tasker, the cancellation policy and confirm that I am over 18 years of age.
                                    Please note our <Text style={{ textDecorationLine: 'underline', color: '#000' }}>privacy policy. </Text></Text>

                                <Text style={styles.termsPolicySecond} >   I would like to receive helpful information, updates, news and promotions through the Co-Tasker newsletter </Text>


                                <TouchableOpacity style={styles.button}

                                    onPress={handleSubmit}>

                                    <Text style={styles.buttonText}>Continue</Text>
                                </TouchableOpacity>

                                <View style={styles.signUpTextCont}>
                                    <Text style={styles.signUpTextStyle}>Already registered on Co-Tasker?</Text>
                                    <Pressable onPress={() => navigation.navigate('SignUp')}>
                                        <Text style={styles.signInBtn}> SIGN IN</Text>

                                    </Pressable>

                                </View>

                            </ImageBackground>
                        </View>

                    </ImageBackground>
                )}
            </Formik>
        </View>

    );

}

export default SignUp;


const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },

    containerEmail: {
        //position: 'relative',
        flexGrow: 1,

    },

    termsPolicy: {
        fontSize: 14,
        marginTop: 60,
        color: 'grey',
        marginLeft: 35,
        marginRight: 35,
        fontFamily: AppTheme.regularfont


    },

    termsPolicySecond: {
        marginTop: 15,
        color: 'grey',
        marginLeft: 35,
        marginRight: 35,
        fontSize: 14,
        fontFamily: AppTheme.regularfont

    },

    titleStyle: {
        marginTop: 25,
        marginLeft: 35,
        textAlign: 'left',
        fontSize: 23,
        color: 'white',
        fontFamily: AppTheme.boldfont

    },
    emailTitle: {
        // marginLeft: 30,
        fontSize: 15,
        color: 'grey',
        fontFamily: AppTheme.regularfont
    },

    inputText:
    {
        fontFamily: AppTheme.regularfont,
        fontSize: 16,
        // marginRight: 30,
        borderBottomColor: '#000',
        borderBottomWidth: 0.8,
        height: 40,
        // marginLeft: 30,
        //paddingLeft: 3
    },

    button: {
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: '#ffbf00',
        borderRadius: 12,
        marginVertical: 40,
        paddingVertical: 10

    },

    buttonText: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 19,
        fontFamily: AppTheme.boldfont,
    },
    signUpTextCont: {

        justifyContent: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: win.height * 0.10

    },
    signUpTextStyle:
    {
        fontSize: 15,
        fontFamily: AppTheme.regularfont,
        color: 'grey',
    },

    buttonSignUP:
    {
        fontSize: 14,
        marginVertical: 10,
        fontWeight: 'bold',
        color: 'black',
    },

    signInBtn: {
        fontFamily: AppTheme.semiboldfont,
        fontSize: 17,
        color: '#000'
    },
    errors: {
        color: AppTheme.red_forValidationMsg,
        fontFamily: AppTheme.regularfont,
        fontSize: 14,
        textAlign: 'right',
        marginTop: 2
    },

});