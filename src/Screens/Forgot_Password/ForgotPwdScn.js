import { View, Text, Dimensions, StyleSheet, TextInput, Alert, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import AppTheme from '../../AppTheme';

const win = Dimensions.get('window');
var backImg = require('../DetailsForm/icon_back_black.png');

const ForgotPwdScn = () => {

    const navigation = useNavigation();
    const [values, setText] = useState({ email: '' });
    const [submitted, setSubmitted] = useState(false);


    const handleEmailChange = (inputText) => {

        console.log(inputText)
        setText({
            ...values,
            email: inputText,
        });
    }

    const handleSubmit = (inputText) => {
        //inputText.preventDefault();
        setSubmitted(true);
        if (values.email) {
           // setValid(true)
            validate(values.email)
        } else {
            Alert.alert('Please enter email')
        }

    }


    const validate = (emailValue) => {
        console.log(emailValue);
        let reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (reg.test(emailValue) === false) {
            Alert.alert("Please enter Valid Email address");
            return false;
        }
        else {
           // Alert.alert("Email is Correct");
            navigation.navigate('ResetPwdVerifyScn')
        }
    }


    return (
        <>
            <TouchableOpacity
                onPress={() => {
                    navigation.goBack()
                }}>
                <Image source={backImg}
                    resizeMode={'contain'}
                    style={{
                        marginTop: 60,
                        marginLeft: 30, height: 25, width: 23
                    }} />

            </TouchableOpacity>
            <Text style={styles.titleStyle}>Forgot Password</Text>

            <Text style={styles.descStyle}>Don't worry! Simply enter your registered email address below to receive instructions about how to reset your password</Text>

            <View style={{ flexDirection: 'column', marginHorizontal: win.width * 0.08, marginTop: 20 }}>
                <Text style={styles.emailTitle} >Email Address
                </Text>

                <TextInput
                    style={styles.inputText}
                    placeholder="Enter your email address"
                    autoCapitalize='none'
                    keyboardType='email-address'
                    autoCorrect={false}
                    autoCompleteType='email'
                    onChangeText={handleEmailChange}
                    value={values.email} />


            </View>

            <View style={{ justifyContent: 'flex-end', flexGrow: 1 }}>
                <TouchableOpacity style={styles.button}

                    onPress={() => {
                        handleSubmit()
                    }}>

                    <Text style={styles.buttonText}>Send</Text>
                </TouchableOpacity>
            </View>




        </>

    );
}

export default ForgotPwdScn;

const styles = StyleSheet.create({

    container: {
        flexGrow: 1,

    },

    titleStyle: {
        marginTop: 25,
        marginLeft: 30,
        textAlign: 'left',
        fontSize: 23,
        color: AppTheme.blackColor,
        fontFamily: AppTheme.boldfont
    },

    descStyle: {
        marginTop: 25,
        marginLeft: 30,
        fontSize: 14,
        color: 'grey',
        fontFamily: AppTheme.regularfont
    },

    inputText:
    {
        fontFamily: AppTheme.regularfont,
        fontSize: 16,
        borderBottomColor: '#000',
        borderBottomWidth: 0.8,
        height: 40,
    },

    emailTitle: {
        color: 'grey',
        fontSize: 15,
        color: '#696969',
        fontFamily: AppTheme.regularfont

    },

    button: {

        backgroundColor: AppTheme.yellowColor,
        borderRadius: 12,
        paddingVertical: 10,
        marginBottom: 40,
        //  justifyContent: 'flex-end',
        marginHorizontal: win.width * 0.06

    },

    buttonText: {
        color: '#ffffff',
        fontSize: 19,
        fontFamily: AppTheme.boldfont,
        textAlign: 'center'
    },


});