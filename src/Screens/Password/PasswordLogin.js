import { View, Text, StyleSheet, Alert, ImageBackground, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';


var app_Design = require('../Login/AppDesign.png');
var welcomeBack = require('../Login/welcomeback.png');
var backImg = require('../Login/back_white.png');

const win = Dimensions.get('window');

const PasswordLogin = () => {

    const navigation = useNavigation();
   // const [text, setText] = useState('');
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
            navigation.navigate('Tabber');
        }

    }


    validate = (text) => {
        console.log(text);
        
        if (!text.trim()) {
            Alert.alert("Please enter Password");

        } 
        else {
            // Alert.alert("Email is Correct");
            navigation.navigate('Tabber')
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
                            marginTop: 55,
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

                <View style={{ flexDirection: 'column', flexGrow: 1, paddingStart: 25, marginBottom: 150 }}>
                    <Text style={styles.passwordTitle} > Enter Password
                    </Text>

                    <TextInput
                        style={styles.inputText}
                        placeholder="Password"
                        autoCorrect={false}
                        onChangeText={handlePwdChange}
                        value={values.password}
                    />
                    {submitted && valid && !values.password ? <Text style={styles.errorMsgStyle} > Please enter Password
                    </Text> : null} 

                    <TouchableOpacity

                        onPress={() => {
                            //console.log(text)
                             Alert.alert("Forgot Password Coming Soon")
                            //navigation.navigate('Tabber');
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


        </View>

    );
}

export default PasswordLogin;

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
        backgroundColor: '#ffbf00',
        borderRadius: 12,
        marginBottom: 30,
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

    btnForgotPwd:{
        color: '#000',
        fontSize: 16,
        fontWeight: '400',
        textAlign: 'right',
        paddingRight:30,
        marginTop:10
    },
    errorMsgStyle: {

        fontSize: 12,
        color: 'red',
        textAlign: 'right',
        marginEnd: 30,
        paddingTop: 5

    }
    


});