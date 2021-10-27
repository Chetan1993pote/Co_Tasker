import { View, Text, StyleSheet, Alert, ImageBackground, Image, TextInput, TouchableOpacity, Button, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';


var app_Design = require('./AppDesign.png');
var welcomeBack = require('./welcomeback.png');
var backImg = require('../Login/back_white.png');


const win = Dimensions.get('window');

const Login = () => {

    const navigation = useNavigation();
    const [values, setText] = useState({ email: '' });

    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

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
            setValid(true)
            validate(values.email)

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
             navigation.navigate('PasswordLogin')
        }
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

                <View style={{ flexDirection: 'column', paddingStart: 25, flexGrow: 1, marginTop: 135 }}>
                    <Text style={styles.emailTitle} > Email Address
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

               {submitted && valid && !values.email ? <Text style={styles.errorMsgStyle} > Please enter email address
                    </Text> : null} 
                   

                    <TouchableOpacity style={styles.button}

                        onPress={() => {
                            handleSubmit()
                        }}>

                        <Text style={styles.buttonText}>Continue</Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.signUpTextCont}>
                    <Text style={styles.signUpTextStyle}>Not a member of Co-Tasker yet?</Text>
                    <Button
                        color="#000"
                        onPress={() => navigation.navigate('SignUp')}
                        title="Register here"
                    />
                </View>

            </ImageBackground>


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

    emailTitle: {

        fontSize: 15,
        color: 'grey',
        fontWeight: 'normal'

    },

    inputText:
    {
        marginRight: 30,
        borderBottomColor: '#000',
        borderBottomWidth: 0.8,
        height: 40,
        paddingLeft: 3
    },

    button: {
        alignSelf: 'center',
        width: win.width - 40,
        backgroundColor: '#ffbf00',
        borderRadius: 12,
        marginVertical: 100,
        paddingVertical: 16

    },

    buttonText: {
        color: '#ffffff',
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    signUpTextCont: {
        marginBottom: 20,
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexGrow: 1
    },

    signUpTextStyle:
    {
        fontSize: 15,
        fontWeight: 'normal',
        color: 'grey',
    },

    buttonSignUP:
    {
        fontSize: 15,
        marginVertical: 10,
        fontWeight: 'normal',
        color: 'black',
    },

    errorMsgStyle: {

        fontSize: 12,
        color: 'red',
        textAlign: 'right',
        marginEnd: 30,
        paddingTop: 5

    }

});