import { View, Text, StyleSheet, Alert, ImageBackground, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';


var app_Design = require('./AppDesign.png');
var welcomeBack = require('./welcomeback.png');

const win = Dimensions.get('window');

const Login = () => {

    const navigation = useNavigation();
    const [text, setText] = useState('');

    validate = (text) => {
        console.log(text);
        let reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!text.trim()) {
            Alert.alert("Please enter email address");

        } else if (reg.test(text) === false) {
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

                <Text style={styles.titleStyle} > Welcome Back
                </Text>
                <View style={styles.containerEmail}>
                    <Image source={welcomeBack}
                        resizeMode={'contain'}
                        style={{ height: win.height + 30, width: win.width }}></Image>

                </View>

                <Text style={styles.emailTitle} > Email Address
                </Text>

                <TextInput
                    style={styles.inputText}
                    placeholder="Enter your email address"
                    autoCapitalize='none'
                    keyboardType='email-address'
                    autoCorrect={false}
                    autoCompleteType='email'
                    onChangeText={text => setText(text)}
                    defaultValue={text}
                />

                <TouchableOpacity style={styles.button}

                    onPress={() => {
                        console.log(text)
                        // Alert.alert(text)
                        this.validate(text)

                    }}>

                    <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>

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
        position: 'relative',
        flexGrow: 1,

    },

    containerEmail: {
        position: 'relative',
        flex: 1,

    },

    titleStyle: {
        marginTop: 100,
        marginLeft: 35,
        textAlign: 'left',
        fontSize: 25,
        color: 'white',
        fontWeight: "bold"
    },
    emailTitle: {
        marginTop: 220,
        marginLeft: 29,
        fontSize: 15,
        color: 'grey',
        fontWeight: 'normal'

    },

    inputText:
    {
        marginTop: 5,
        marginRight: 30,
        borderBottomColor: '#000',
        borderBottomWidth: 0.8,
        height: 40,
        marginLeft: 30,
        paddingLeft: 3
    },

    button: {
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: '#ffbf00',
        borderRadius: 12,
        marginVertical: 150,
        paddingVertical: 16

    },

    buttonText: {
        color: '#ffffff',
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    signUpTextCont: {
      
        flexGrow: 1,
        justifyContent: 'flex-start',
        alignItems: "center",
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

});