import { View, Text, StyleSheet, Alert, ImageBackground, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';



var app_Design = require('../Login/AppDesign.png');
var welcomeBack = require('../Login/welcomeback.png');
var backImg = require('../Login/back_white.png');

const win = Dimensions.get('window');

const PwdConfirmPwd = () => {

    const navigation = useNavigation();
    const [values, setText] = useState({ password: '', confirmPwd: '' });

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

            }else{
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
                            marginTop: 55,
                            marginLeft: 35, height: 25, width: 25
                        }} />

                </TouchableOpacity>
                <Text style={styles.titleStyle} > Join Co-Tasker
                </Text>

                <View style={styles.containerEmail}>
                    <ImageBackground source={welcomeBack}
                        resizeMode={'contain'}
                        style={{ height: win.height, width: win.width }}></ImageBackground>

                </View>

                <View style={{ flexDirection: 'column', flexGrow: 1, paddingStart: 25, justifyContent: 'flex-start' }}>
                    <Text style={styles.passwordTitle} > Enter Password
                    </Text>

                    <TextInput
                        style={styles.inputText}
                        placeholder="Enter your password"
                        autoCorrect={false}
                        onChangeText={handleEnterPwdChange}
                        value={values.password}
                        secureTextEntry={true}
                    />
                    {submitted && valid && !values.password ? <Text style={styles.errorMsgStyle} > Please enter password
                    </Text> : null}

                    <Text style={styles.confirmPwdTitle} > Confirm Password
                    </Text>

                    <TextInput
                        style={styles.inputText}
                        placeholder="Confirm your password"
                        autoCorrect={false}
                        onChangeText={handleConfirmPwdChange}
                        value={values.confirmPwd}
                        secureTextEntry={true}
                    />

                    {submitted && valid && !values.confirmPwd ? <Text style={styles.errorMsgStyle} > Please enter confirm password
                    </Text> : null}

                    <View style={{ marginHorizontal: win.width * 0.01, flexDirection: 'column', marginTop: 55 }}>

                        <Text style={{ fontSize: 11 ,color:'gray'}}>{'\u25CF'}  At least 8 characters</Text>
                        <Text style={{ fontSize: 11 ,color:'gray'}}>{'\u25CF'}  A mixture of uppercase and lowercase letters</Text>
                        <Text style={{ fontSize: 11 ,color:'gray'}}>{'\u25CF'}  A mixture of letters and numbers</Text>

                    </View>

                </View>


                <TouchableOpacity style={styles.button}

                    onPress={() => {
                        handleRegister()
                    }}>

                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>


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
        marginTop: 20

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
        fontSize: 13,
        color: 'grey',
        fontWeight: 'normal'
    },

    confirmPwdTitle: {
        marginTop: 12,
        fontSize: 13,
        color: 'grey',
        fontWeight: 'normal'
    },

    inputText:
    {

        marginRight: 30,
        borderBottomColor: '#000',
        borderBottomWidth: 0.8,
        height: 35,
        paddingLeft: 3
    },

    button: {
        backgroundColor: '#ffbf00',
        borderRadius: 12,
        marginBottom: 40,
        paddingVertical: 14,
        justifyContent: 'flex-end',
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