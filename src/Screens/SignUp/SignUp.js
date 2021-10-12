
import { View, Text, StyleSheet, Alert, ImageBackground, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';


var app_Design = require('../Login/AppDesign.png');
var welcomeBack = require('../Login/welcomeback.png');

const win = Dimensions.get('window');

const SignUp = () => {

    const navigation = useNavigation();
    const [text, setText] = useState('');

    validate = (text) => {
        console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (!text.trim()) {
            Alert.alert("Please enter email address");

        } else if (reg.test(text) === false) {
            Alert.alert("Please enter Valid Email address");
            return false;
        }
        else {
            Alert.alert("Email is Incorrect");
        }
    }

    return (
        <View>
            <ImageBackground
                source={app_Design}
                style={{ height: '100%', width: '100%' }}>

                <Text style={styles.titleStyle} > Join Co-Tasker
                </Text>

                <View style={styles.containerEmail}>
                    <Image source={welcomeBack}
                        resizeMode={'contain'}
                        style={{ height: win.height + 60, width: win.width }}></Image>
                </View>

                <Text style={styles.emailTitle} > Email Address </Text>

                <TextInput
                    style={styles.inputText}
                    placeholder="Enter your email address"
                    onChangeText={text => setText(text)}
                    defaultValue={text}
                />

                <Text style={styles.termsPolicy} > I hereby accept the general <Text style={{textDecorationLine: 'underline',color:'#000'}}>terms & conditions</Text> of Co-Tasker, the cancellation policy and confirm that I am over 18 years of age.
                    Please note our <Text style={{textDecorationLine: 'underline',color:'#000'}}>privacy policy. </Text></Text>

                <Text style={styles.termsPolicySecond} >   I would like to receive helpful information, updates, news and promotions through the Co-Tasker newsletter </Text>


                <TouchableOpacity style={styles.button}

                    onPress={() => {
                        console.log(text)
                        // Alert.alert(text)
                        this.validate(text)

                    }}>

                    <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>

                <View style={styles.signUpTextCont}>
                    <Text style={styles.signUpTextStyle}>Already registered on Co-Tasker?</Text>
                    <Button
                        color="#000"
                        onPress={() => navigation.navigate('Login')}
                        title="SIGN IN"
                    />
                </View>


            </ImageBackground>
        </View>
    );

}

export default SignUp;


const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flexGrow: 1,

    },

    containerEmail: {
        position: 'relative',
        flex: 1,

    },

    termsPolicy: {

        marginTop: 60,
        color: 'grey',
        marginLeft: 35,
        marginRight: 35,

    },

    termsPolicySecond: {
        marginTop: 20,
        color: 'grey',
        marginLeft: 35,
        marginRight: 35,
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
        marginTop: 180,
        marginLeft: 29,
        fontSize: 15,
        color: 'grey',
        fontWeight: 'normal',
        flexGrow: 1,

    },

    welcomeBaseImg: {
        width: '100%',
        height: 400
    },

    inputText:
    {
        marginTop: -50,
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
        marginVertical: 40,
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
        justifyContent: 'flex-end',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'center'

    },
    signUpTextStyle:
    {
        fontSize: 15,
        fontWeight: 'normal',
        color: 'grey',
    },

    buttonSignUP:
    {
        fontSize: 14,
        marginVertical: 10,
        fontWeight: 'bold',
        color: 'black',
    },

});